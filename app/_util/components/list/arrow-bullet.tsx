import {ListItemIcon} from "@mui/material";

export function ArrowBullet() {
    return <ListItemIcon className="w-fit !min-w-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14"
             viewBox="0 0 17 14" fill="none" className="mt-[5px]">
            <path
                d="M17 5.97561V8.02439H14.8298V9.90244H12.6596V7.85366H0V6.14634H12.6596V4.09756H14.8298V5.97561H17Z"
                fill="#C3C6E3"/>
            <path d="M12.6596 2.04878H10.4894V4.09756H12.6596V2.04878Z"
                  fill="#C3C6E3"/>
            <path d="M10.4894 0H8.31915V2.04878H10.4894V0Z" fill="#C3C6E3"/>
            <path d="M12.6596 9.90244H10.4894V11.9512H12.6596V9.90244Z"
                  fill="#C3C6E3"/>
            <path d="M10.4894 11.9512H8.31915V14H10.4894V11.9512Z"
                  fill="#C3C6E3"/>
        </svg>
    </ListItemIcon>;
}