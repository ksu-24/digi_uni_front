"use client";

import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {del, get, patch, post} from "@/app/_util/fetching";
import {ImageDropzone} from "@/app/_util/components/image-dropzone";
import {useDraggableList} from "@/app/_util/hooks/useDraggableList";
import {MuiInputThemeReset} from "@/app/[locale]/(with-header)/admin/mui-theme-reset";

const logoClasses = [
    "max-xs:!w-[21dvw] max-md:w-[12dvw] w-[10dvw] xl:w-[7dvw] 3xl:w-[5dvw]",
    "max-xs:!w-[21dvw] max-md:w-[10dvw] w-[9dvw] xl:w-[6dvw] 3xl:w-[4dvw]",
    "max-xs:!w-[30dvw] max-md:w-[16dvw] w-[12dvw] xl:w-[10dvw] 2xl:w-[9dvw] 3xl:w-[7dvw]",
    "max-xs:!w-[32dvw] max-md:w-[18dvw] w-[14dvw] xl:w-[12dvw] 2xl:w-[11dvw] 3xl:w-[8dvw]",
];

export interface PartnerLocalization {
    name: string;
    url: string;
    country: string;
    logo: {
        url: string | null;
        logoType: number;
    };
    priority: number;
    language: string;
}

export interface Partner {
    id: number;
    localizations: Record<string, PartnerLocalization>;
}

interface PartnerForm {
    localizations: Record<string, PartnerLocalization>;
}

const defaultNewPartner = () => ({
    localizations: {
        EN: {
            name: "",
            url: "",
            country: "",
            logo: {
                url: null,
                logoType: 1
            },
            priority: 0,
            language: "EN"
        },
        UK: {
            name: "",
            url: "",
            country: "",
            logo: {
                url: null,
                logoType: 1
            },
            priority: 0,
            language: "UK"
        }
    }
});

function mapToUpsertRequest(partner: PartnerForm) {
    return {
        localizations: Object.values(partner.localizations).map(localization => ({
            language: localization.language,
            name: localization.name,
        })),
        url: partner.localizations["UK"].url,
        country: partner.localizations["UK"].country,
        logo: {
            image: partner.localizations["UK"].logo.url,
            logoType: partner.localizations["UK"].logo.logoType
        },
        priority: partner.localizations["UK"].priority
    }
}

export default function PartnersAdmin() {
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const [displayLanguage, setDisplayLanguage] = useState<string>("EN");
    const [formLanguage, setFormLanguage] = useState<string>("EN");

    const [formPartner, setFormPartner] = useState<PartnerForm>(defaultNewPartner());

    useEffect(() => {
        fetchPartners();
    }, []);

    const fetchPartners = async () => {
        try {
            setLoading(true);
            const response = await get("/partners");
            if (!response.ok) {
                setError("Failed to fetch partners");
                return;
            }
            const data = await response.json();
            const sortedPartners = data.sort((a: Partner, b: Partner) =>
                b.localizations.EN.priority - a.localizations.EN.priority);
            setPartners(sortedPartners);
            setError(null);
        } catch (err) {
            setError("Error fetching partners: " + (err instanceof Error ? err.message : String(err)));
        } finally {
            setLoading(false);
        }
    };

    const {handleDragStart, handleDragOver, handleDrop} = useDraggableList({
        items: partners.map(partner => ({
            ...partner,
            priority: partner.localizations.EN.priority
        })),
        setItems: (updatedPartners) => {
            const newPartners = [...updatedPartners];
            for (let i = 0; i < newPartners.length; i++) {
                for (const lang in newPartners[i].localizations) {
                    newPartners[i].localizations[lang].priority = newPartners[i].priority;
                }
            }
            setPartners(newPartners);
        },
        updateEndpoint: (id) => `/partners/${id}`,
        onError: (errorMessage) => setError(errorMessage),
        fetchItems: fetchPartners
    });

    const handleInputChange = (field: string, value: string) => {
        const updatedLocalizations = {...formPartner.localizations};

        Object.keys(updatedLocalizations).forEach(lang => {
            updatedLocalizations[lang] = {
                ...updatedLocalizations[lang],
                [field]: value
            };
        });

        setFormPartner(prev => ({
            ...prev,
            localizations: updatedLocalizations
        }));
    };

    const handleLocalizationChange = (language: string, field: string, value: string) => {
        setFormPartner(prev => ({
            ...prev,
            localizations: {
                ...prev.localizations,
                [language]: {
                    ...prev.localizations[language],
                    [field]: value
                }
            }
        }));
    };

    const handleLogoTypeChange = (value: number) => {
        const updatedLocalizations = {...formPartner.localizations};

        Object.keys(updatedLocalizations).forEach(lang => {
            updatedLocalizations[lang] = {
                ...updatedLocalizations[lang],
                logo: {
                    ...updatedLocalizations[lang].logo,
                    logoType: value
                }
            };
        });

        setFormPartner(prev => ({
            ...prev,
            localizations: updatedLocalizations
        }));
    };

    const handleLogoUpload = (base64Image: string) => {
        const updatedLocalizations = {...formPartner.localizations};

        Object.keys(updatedLocalizations).forEach(lang => {
            updatedLocalizations[lang] = {
                ...updatedLocalizations[lang],
                logo: {
                    ...updatedLocalizations[lang].logo,
                    url: base64Image
                }
            };
        });

        setFormPartner(prev => ({
            ...prev,
            localizations: updatedLocalizations
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await post("/partners", mapToUpsertRequest(formPartner));
            if (!response.ok) {
                setError("Failed to create partner");
                return;
            }
            setFormPartner(defaultNewPartner());
            await fetchPartners();
            setOpenFormDialog(false);
        } catch (err) {
            setError("Error creating partner: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const handleEdit = (partner: Partner) => {
        setEditingPartner(partner);
        setFormPartner({
            localizations: partner.localizations
        });
        setOpenFormDialog(true);
    };

    const handleAddNew = () => {
        setEditingPartner(null);
        setFormPartner(defaultNewPartner());
        setOpenFormDialog(true);
    };

    const handleUpdate = async () => {
        if (!editingPartner) return;

        try {
            const response = await patch(`/partners/${editingPartner.id}`, mapToUpsertRequest(formPartner));
            if (!response.ok) {
                setError("Failed to update partner");
                return;
            }
            setEditingPartner(null);
            setFormPartner(defaultNewPartner());
            await fetchPartners();
            setOpenFormDialog(false);
        } catch (err) {
            setError("Error updating partner: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this partner?")) return;

        try {
            const response = await del(`/partners/${id}`);
            if (!response.ok) {
                setError("Failed to delete partner");
                return;
            }
            await fetchPartners();
        } catch (err) {
            setError("Error deleting partner: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const handleCancelEdit = () => {
        setEditingPartner(null);
        setFormPartner(defaultNewPartner());
        setOpenFormDialog(false);
    };

    if (loading && partners.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <MuiInputThemeReset>
            <Box className="p-4">
                <Typography variant="h4" className="mb-4">Partners Admin</Typography>

                <Box className="mb-4 flex justify-between items-center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddNew}
                        sx={{
                            "&:not(:hover)": {
                                color: "black !important",
                            }
                        }}
                    >
                        Add New Partner
                    </Button>

                    <FormControl sx={{minWidth: 120}}>
                        <InputLabel>Display Language</InputLabel>
                        <Select
                            value={displayLanguage}
                            onChange={(e) => setDisplayLanguage(e.target.value)}
                            label="Display Language"
                        >
                            <MenuItem value="EN">English</MenuItem>
                            <MenuItem value="UK">Ukrainian</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Typography variant="h5" className="mb-4">Partners List (Drag to reorder)</Typography>

                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partners.map((partner) => (
                        <Card
                            key={partner.id}
                            draggable
                            onDragStart={() => handleDragStart(partner.id)}
                            onDragOver={(e) => handleDragOver(e, partner.id)}
                            onDrop={() => handleDrop()}
                            className="cursor-move"
                        >
                            <CardContent>
                                <Box className="flex flex-col items-center justify-between h-full">
                                    <Box
                                        className={`mb-4 ${logoClasses[(partner.localizations[displayLanguage]?.logo?.logoType || partner.localizations.EN.logo.logoType) - 1]}`}>
                                        <img
                                            src={(partner.localizations[displayLanguage]?.logo?.url || partner.localizations.EN.logo.url) ?? ""}
                                            alt={partner.localizations[displayLanguage]?.name || partner.localizations.EN.name}
                                            className={"w-full"}
                                        />
                                    </Box>

                                    {/* Partner Details */}
                                    <Typography variant="h6" className="mb-2">
                                        {partner.localizations[displayLanguage]?.name || partner.localizations.EN.name}
                                    </Typography>

                                    <Typography variant="body2" className="mb-2">
                                        Country: {partner.localizations[displayLanguage]?.country || partner.localizations.EN.country}
                                    </Typography>

                                    <Typography variant="body2" className="mb-2">
                                        URL: {partner.localizations[displayLanguage]?.url || partner.localizations.EN.url}
                                    </Typography>

                                    {/* Actions */}
                                    <Box className="flex gap-2 mt-2">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleEdit(partner)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleDelete(partner.id)}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Form Dialog */}
                <Dialog
                    open={openFormDialog}
                    onClose={handleCancelEdit}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>
                        {editingPartner ? "Edit Partner" : "Add New Partner"}
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3} className="mt-2">

                                <Box>
                                    <Typography variant="subtitle1">Logo Image</Typography>
                                    <Stack className="h-40 mb-2 w-full items-center">
                                        <ImageDropzone
                                            onPictureUpload={handleLogoUpload}
                                            initialPicture={formPartner.localizations[formLanguage]?.logo?.url || ""}
                                            className={logoClasses[(formPartner.localizations[formLanguage]?.logo?.logoType || 1) - 1]}
                                        />
                                    </Stack>
                                </Box>

                                <FormControl fullWidth>
                                    <InputLabel>Logo Type</InputLabel>
                                    <Select
                                        value={formPartner.localizations[formLanguage]?.logo?.logoType || 1}
                                        onChange={(e) => handleLogoTypeChange(e.target.value as number)}
                                        label="Logo Type"
                                        required
                                    >
                                        <MenuItem value={1}>Type 1</MenuItem>
                                        <MenuItem value={2}>Type 2</MenuItem>
                                        <MenuItem value={3}>Type 3</MenuItem>
                                        <MenuItem value={4}>Type 4</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    label="URL"
                                    fullWidth
                                    value={formPartner.localizations[formLanguage]?.url || ""}
                                    onChange={(e) => handleInputChange("url", e.target.value)}
                                    required
                                />

                                <TextField
                                    label="Country"
                                    fullWidth
                                    value={formPartner.localizations[formLanguage]?.country || ""}
                                    onChange={(e) => handleInputChange("country", e.target.value)}
                                    required
                                />

                                <Box>
                                    <Box className="flex justify-between items-center mb-2">
                                        <Typography variant="h6">Localizations</Typography>
                                        <FormControl sx={{minWidth: 120}}>
                                            <InputLabel>Language</InputLabel>
                                            <Select
                                                value={formLanguage}
                                                onChange={(e) => setFormLanguage(e.target.value)}
                                                label="Language"
                                            >
                                                <MenuItem value="EN">English</MenuItem>
                                                <MenuItem value="UK">Ukrainian</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>

                                    <Box className="mb-4">
                                        <TextField
                                            label="Name"
                                            fullWidth
                                            value={formPartner.localizations[formLanguage]?.name || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "name", e.target.value)}
                                            required
                                            className="mb-2"
                                        />
                                    </Box>
                                </Box>

                            </Stack>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {editingPartner ? (
                            <>
                                <Button variant="contained" color="primary" onClick={handleUpdate} sx={{
                                    "&:not(:hover)": {
                                        color: "black !important",
                                    }
                                }}>
                                    Update Partner
                                </Button>
                                <Button variant="outlined" color="error" onClick={handleCancelEdit}>
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{
                                    "&:not(:hover)": {
                                        color: "black !important",
                                    }
                                }}>
                                    Add Partner
                                </Button>
                                <Button variant="outlined" color="error" onClick={handleCancelEdit}>
                                    Cancel
                                </Button>
                            </>
                        )}
                    </DialogActions>
                </Dialog>
            </Box>
        </MuiInputThemeReset>
    );
}
