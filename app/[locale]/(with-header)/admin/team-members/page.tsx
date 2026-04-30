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

export interface TeamMemberLocalization {
    name: string;
    title: string;
    experience: string;
    degree: string;
    institution: string;
    caption: string;
    photo: {
        image: string;
    } | null;
    gender: "male" | "female";
    email: string;
    isMain: boolean;
    priority: number;
    partnerId: number | null;
    language: string;
}

interface TeamMember {
    id: number;
    localizations: Record<string, TeamMemberLocalization>;
}

interface TeamMemberForm {
    localizations: Record<string, TeamMemberLocalization>;
}

interface Partner {
    id: number;
    localizations: Record<string, { name: string }>;
}

function defaultNewMember(): TeamMemberForm {
    return {
        localizations: {
            EN: {
                name: "",
                title: "",
                experience: "",
                degree: "",
                institution: "",
                caption: "",
                photo: null,
                gender: "male",
                email: "",
                isMain: false,
                priority: 0,
                partnerId: null,
                language: "EN"
            },
            UK: {
                name: "",
                title: "",
                experience: "",
                degree: "",
                institution: "",
                caption: "",
                photo: null,
                gender: "male",
                email: "",
                isMain: false,
                priority: 0,
                partnerId: null,
                language: "UK"
            }
        },
    };
}

function fillMissingLocalizations(data: TeamMemberForm, sourceLang: string): TeamMemberForm {
    const filled: TeamMemberForm = { localizations: { ...data.localizations } };

    const source = filled.localizations[sourceLang] || filled.localizations.EN;
    if (!source) return filled;

    const fieldsToCopy: (keyof TeamMemberLocalization)[] = [
        'name', 'title', 'experience', 'degree', 'institution', 'caption', 'photo', 'email', 'partnerId', 'priority'
    ];

    Object.keys(filled.localizations).forEach((lang) => {
        if (lang === sourceLang) return;
        const target = { ...filled.localizations[lang] } as TeamMemberLocalization;

        fieldsToCopy.forEach((field) => {
            const t = (target as any)[field];
            const s = (source as any)[field];
            const isEmpty = t === undefined || t === null || t === '' || (field === 'photo' && !(t && (t as any).image));
            if (isEmpty && s !== undefined && s !== null && !(s === '')) {
                (target as any)[field] = s;
            }
        });

        filled.localizations[lang] = target;
    });

    return filled;
}

function mapToUpsertTeamMember(data: TeamMemberForm, sourceLang: string = 'EN') {
    const source = data.localizations[sourceLang] || data.localizations.EN || Object.values(data.localizations)[0];

    return {
        localizations: Object.values(data.localizations).map(localization => ({
            language: localization.language,
            name: localization.name,
            title: localization.title,
            experience: localization.experience,
            degree: localization.degree,
            institution: localization.institution,
            caption: localization.caption,
        })),
        photo: source?.photo?.image,
        gender: source?.gender === "male",
        email: source?.email,
        isMain: source?.isMain,
        partnerId: source?.partnerId,
        priority: source?.priority
    };
}

export default function TeamMembersAdmin() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [partners, setPartners] = useState<Partner[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
    const [openFormDialog, setOpenFormDialog] = useState(false);
    const [displayLanguage, setDisplayLanguage] = useState<string>("EN");
    const [formLanguage, setFormLanguage] = useState<string>("EN");

    const [formMemberMember, setFormMember] = useState<TeamMemberForm>(defaultNewMember());

    useEffect(() => {
        fetchTeamMembers();
        fetchPartners();
    }, []);

    const fetchTeamMembers = async () => {
        try {
            setLoading(true);
            const response = await get("/partners/teamMembers");
            if (!response.ok) {
                setError("Failed to fetch team members");
                return;
            }
            const data = await response.json();
            const sortedMembers = data.sort((a: TeamMember, b: TeamMember) =>
                b.localizations[formLanguage].priority - a.localizations[formLanguage].priority
            );
            setTeamMembers(sortedMembers);
            setError(null);
        } catch (err) {
            setError("Error fetching team members: " + (err instanceof Error ? err.message : String(err)));
        } finally {
            setLoading(false);
        }
    };

    const fetchPartners = async () => {
        try {
            const response = await get("/partners");
            if (!response.ok) {
                setError("Failed to fetch partners");
                return;
            }
            const data = await response.json();
            setPartners(data);
        } catch (err) {
            setError("Error fetching partners: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const {handleDragStart, handleDragOver, handleDrop} = useDraggableList({
        items: teamMembers.map(member => ({
            ...member,
            priority: member.localizations.UK.priority
        })),
        setItems: (members) => {
            const updatedMembers = [...members];
            for (let i = 0; i < updatedMembers.length; i++) {
                for (const lang in updatedMembers[i].localizations) {
                    updatedMembers[i].localizations[lang].priority = updatedMembers[i].priority;
                }
            }
            setTeamMembers(updatedMembers);
        },
        updateEndpoint: (id) => `/partners/teamMembers/${id}`,
        onError: (errorMessage) => setError(errorMessage),
        fetchItems: fetchTeamMembers
    });

    const handleInputChange = (field: string, value: any) => {
        setFormMember(prev => {
            const updatedLocalizations = {...prev.localizations};
            Object.keys(updatedLocalizations).forEach(lang => {
                updatedLocalizations[lang] = {
                    ...updatedLocalizations[lang],
                    [field]: value
                };
            });
            return {
                ...prev,
                localizations: updatedLocalizations
            };
        })
    };

    const handleLocalizationChange = (language: string, field: string, value: string) => {
        setFormMember(prev => ({
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

    const handlePhotoUpload = (base64Image: string) => {
        handleInputChange("photo", {
            image: base64Image
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formMemberMember.localizations[formLanguage].partnerId) {
            setError("Please select a partner");
            return;
        }

        try {
            const filled = fillMissingLocalizations(formMemberMember, formLanguage);
            const response = await post(`/partners/${filled.localizations[formLanguage].partnerId}/teamMembers`, mapToUpsertTeamMember(filled, formLanguage));
            if (!response.ok) {
                setError("Failed to create team member");
                return;
            }
            setFormMember(defaultNewMember());
            await fetchTeamMembers();
            setOpenFormDialog(false);
        } catch (err) {
            setError("Error creating team member: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const handleEdit = (member: TeamMember) => {
        setEditingMember(member);
        setFormMember({
            localizations: member.localizations
        });
        setOpenFormDialog(true);
    };

    const handleAddNew = () => {
        setEditingMember(null);
        setFormMember(defaultNewMember());
        setOpenFormDialog(true);
    };

    const handleUpdate = async () => {
        if (!editingMember) return;

        try {
            const filled = fillMissingLocalizations(formMemberMember, formLanguage);
            const response = await patch(`/partners/teamMembers/${editingMember.id}`, mapToUpsertTeamMember(filled, formLanguage));
            if (!response.ok) {
                setError("Failed to update team member");
                return;
            }
            setEditingMember(null);
            setFormMember(defaultNewMember());
            await fetchTeamMembers();
            setOpenFormDialog(false);
        } catch (err) {
            setError("Error updating team member: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this team member?")) return;

        try {
            const response = await del(`/partners/teamMembers/${id}`);
            if (!response.ok) {
                setError("Failed to delete team member");
                return;
            }
            await fetchTeamMembers();
        } catch (err) {
            setError("Error deleting team member: " + (err instanceof Error ? err.message : String(err)));
        }
    };

    const handleCancelEdit = () => {
        setEditingMember(null);
        setFormMember(defaultNewMember());
        setOpenFormDialog(false);
    };

    if (loading && teamMembers.length === 0) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <MuiInputThemeReset>
            <Box className="p-4">
                <Typography variant="h4" className="mb-4">Team Members Admin</Typography>

                {/* Add Team Member Button and Language Selector */}
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
                        Add New Team Member
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

                <Typography variant="h5" className="mb-4">Team Members List (Drag to reorder)</Typography>

                <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member) => (
                        <Card
                            key={member.id}
                            draggable
                            onDragStart={() => handleDragStart(member.id)}
                            onDragOver={(e) => handleDragOver(e, member.id)}
                            onDragEnd={() => handleDrop()}
                            className="cursor-move !opacity-100"
                        >
                            <CardContent>
                                <Box className="flex flex-col items-center">
                                    <Box className="mb-4 w-32 h-32 overflow-hidden">
                                        <img src={member.localizations[formLanguage].photo?.image ?? (
                                            (member.localizations[formLanguage].gender === "male") ?
                                                "/images/about/man_placeholder.jpg" :
                                                "/images/about/woman_placeholder.jpg"
                                        )}
                                             alt={member.localizations[displayLanguage]?.name || member.localizations.EN.name}
                                             className="w-full h-full object-cover"
                                        />
                                    </Box>
                                    <Typography variant="h6" className="mb-1">
                                        {member.localizations[displayLanguage]?.name || member.localizations.EN.name}
                                    </Typography>

                                    <Typography variant="subtitle1" className="mb-2">
                                        {member.localizations[displayLanguage]?.title || member.localizations.EN.title}
                                    </Typography>

                                    <Typography variant="body2" className="mb-1">
                                        Email: {member.localizations[formLanguage].email}
                                    </Typography>

                                    <Typography variant="body2" className="mb-2">
                                        Main: {member.localizations[formLanguage].isMain ? "Yes" : "No"}
                                    </Typography>

                                    {member.localizations[formLanguage].partnerId && (
                                        <Typography variant="body2" className="mb-2">
                                            Partner: {partners.find(p =>
                                                p.id === member.localizations[formLanguage].partnerId)?.localizations[displayLanguage]?.name ||
                                            partners.find(p =>
                                                p.id === member.localizations[formLanguage].partnerId)?.localizations.EN.name ||
                                            "Unknown"}
                                        </Typography>
                                    )}

                                    <Box className="flex gap-2 mt-2">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={() => handleEdit(member)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            onClick={() => handleDelete(member.id)}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Dialog
                    open={openFormDialog}
                    onClose={handleCancelEdit}
                    maxWidth="xl"
                    fullWidth
                >
                    <DialogTitle>
                        {editingMember ? "Edit Team Member" : "Add New Team Member"}
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3} className="mt-2">
                                <FormControl fullWidth>
                                    <InputLabel>Partner</InputLabel>
                                    <Select
                                        value={formMemberMember.localizations[formLanguage].partnerId || ""}
                                        onChange={(e) => handleInputChange("partnerId", e.target.value)}
                                        label="Partner"
                                        required
                                    >
                                        {partners.map((partner) => (
                                            <MenuItem key={partner.id} value={partner.id}>
                                                {partner.localizations.EN.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <Box>
                                    <Typography variant="subtitle1">Photo</Typography>
                                    <Box className="h-40 mb-2">
                                        <ImageDropzone
                                            onPictureUpload={handlePhotoUpload}
                                            initialPicture={formMemberMember.localizations[formLanguage].photo?.image ?? null}
                                        />
                                    </Box>
                                </Box>

                                <FormControl fullWidth>
                                    <InputLabel>Gender</InputLabel>
                                    <Select
                                        value={formMemberMember.localizations[formLanguage].gender}
                                        onChange={(e) => handleInputChange("gender", e.target.value)}
                                        label="Gender"
                                        required
                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>Female</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    label="Email"
                                    fullWidth
                                    value={formMemberMember.localizations[formLanguage].email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    required
                                    type="email"
                                />

                                <FormControl fullWidth>
                                    <InputLabel>Is Main</InputLabel>
                                    <Select
                                        value={formMemberMember.localizations[formLanguage].isMain}
                                        onChange={(e) => handleInputChange("isMain", e.target.value === "true")}
                                        label="Is Main"
                                        required
                                    >
                                        <MenuItem value={"true"}>Yes</MenuItem>
                                        <MenuItem value={"false"}>No</MenuItem>
                                    </Select>
                                </FormControl>

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

                                    <Box className="mb-6 p-4 border border-gray-200 rounded">
                                        <TextField
                                            label="Name"
                                            fullWidth
                                            value={formMemberMember.localizations[formLanguage]?.name || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "name", e.target.value)}
                                            required
                                            className="mb-2"
                                        />

                                        <TextField
                                            label="Title"
                                            fullWidth
                                            value={formMemberMember.localizations[formLanguage]?.title || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "title", e.target.value)}
                                            required
                                            className="mb-2"
                                        />

                                        <TextField
                                            label="Experience"
                                            fullWidth
                                            value={formMemberMember.localizations[formLanguage]?.experience || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "experience", e.target.value)}
                                            required
                                            multiline
                                            rows={4}
                                            className="mb-2"
                                        />

                                        <TextField
                                            label="Degree"
                                            fullWidth
                                            value={formMemberMember.localizations[formLanguage]?.degree || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "degree", e.target.value)}
                                            required
                                            className="mb-2"
                                        />

                                        <TextField
                                            label="Institution"
                                            fullWidth
                                            value={formMemberMember.localizations[formLanguage]?.institution || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "institution", e.target.value)}
                                            required
                                            className="mb-2"
                                        />

                                        <TextField
                                            label="Caption"
                                            fullWidth
                                            value={formMemberMember.localizations[formLanguage]?.caption || ""}
                                            onChange={(e) => handleLocalizationChange(formLanguage, "caption", e.target.value)}
                                            required
                                            multiline
                                            rows={2}
                                        />
                                    </Box>
                                </Box>
                            </Stack>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {editingMember ? (
                            <>
                                <Button variant="outlined" color="error" onClick={handleCancelEdit}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleUpdate} sx={{
                                    "&:not(:hover)": {
                                        color: "black !important",
                                    }
                                }}>
                                    Update Team Member
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button variant="outlined" color="error" onClick={handleCancelEdit}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{
                                    "&:not(:hover)": {
                                        color: "black !important",
                                    }
                                }}>
                                    Add Team Member
                                </Button>
                            </>
                        )}
                    </DialogActions>
                </Dialog>
            </Box>
        </MuiInputThemeReset>
    );
}
