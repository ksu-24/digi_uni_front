import FormWrapper from "@/app/_util/components/form-wrapper";
import {TextField, Typography} from "@mui/material";
import {ImageDropzone} from "@/app/_util/components/image-dropzone";
import themeObj from "@/app/_theme/theme-obj";

export default function PreviewForm() {
    return (
        <FormWrapper onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
        }} formProps={{
            className: "items-center gap-4 w-1/2"
        }}>
            <Typography variant="h1">Preview</Typography>
            <ImageDropzone className="!h-[20dvh] border-[1px] border-black"/>
            <TextField label="Title" variant="standard" className="w-full" name="topic" required style={{
                ...themeObj.typography.h4
            }}/>
            <TextField label="Description" required variant="standard" multiline className="w-full" name="description" style={{
                ...themeObj.typography.body1
            }}/>
        </FormWrapper>
    )
}