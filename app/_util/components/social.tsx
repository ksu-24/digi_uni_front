import {Stack} from "@mui/material";
import {Link} from "@/app/_localization/navigation";
import facebook from '@/public/images/commons/facebook.svg'
import linkedin from '@/public/images/commons/linkedin.svg'
import Image from "next/image";

export function Social(
    {
        direction = "column",
        color = "black",
        className = "",
        size = 21,
        imageClassname = ""
    }: {
        direction?: "row" | "column",
        color?: string,
        className?: string,
        size?: number,
        imageClassname?: string
    }
) {
    return (
        <Stack className={className + " gap-[2dvw] items-start"} direction={direction} sx={{
            "& *": {
                color
            }
        }}>
            <Link href="https://www.facebook.com/khersonstateuniversity">
                {color === "white" ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                         className={imageClassname}
                    >
                        <path
                            d="M17.5 0H2.5C1.12125 0 0 1.12125 0 2.5V17.5C0 18.8788 1.12125 20 2.5 20H10V13.125H7.5V10H10V7.5C10 6.50544 10.3951 5.55161 11.0983 4.84835C11.8016 4.14509 12.7554 3.75 13.75 3.75H16.25V6.875H15C14.31 6.875 13.75 6.81 13.75 7.5V10H16.875L15.625 13.125H13.75V20H17.5C18.8788 20 20 18.8788 20 17.5V2.5C20 1.12125 18.8788 0 17.5 0Z"
                            fill="white"/>
                    </svg> :
                    <Image src={facebook} alt="facebook" width={size} height={size} className={imageClassname + `
                max-xs:!w-[30px] max-xs:!h-[30px]
                `}/>}
            </Link>
            <Link href="https://www.linkedin.com/school/kherson-state-university">
                {color === "white" ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                         className={imageClassname}>
                        <path
                            d="M18.5231 0H1.47779C0.661563 0 0 0.641333 0 1.43289V18.5664C0 19.358 0.661785 20 1.47779 20H18.5231C19.3393 20 20 19.3578 20 18.5664V1.43289C20 0.641556 19.3393 0 18.5231 0ZM6.0634 16.7413H3.04159V7.71156H6.0634V16.7413ZM4.55272 6.478H4.53249C3.51915 6.478 2.86225 5.78489 2.86225 4.91733C2.86225 4.03222 3.53848 3.358 4.57183 3.358C5.6054 3.358 6.24118 4.032 6.26118 4.91733C6.26118 5.78511 5.60562 6.478 4.55272 6.478ZM16.9564 16.7413H13.9355V11.9102C13.9355 10.696 13.4977 9.86778 12.4052 9.86778C11.5695 9.86778 11.0735 10.4267 10.8557 10.966C10.7748 11.1589 10.755 11.4282 10.755 11.6976V16.7411H7.73453C7.73453 16.7411 7.77409 8.55822 7.73453 7.71133H10.7552V8.99156C11.1563 8.37644 11.8728 7.49889 13.4773 7.49889C15.4655 7.49889 16.9564 8.78867 16.9564 11.5636V16.7413ZM10.7357 9.02022C10.741 9.01178 10.7481 9.00133 10.7552 8.99156V9.02022H10.7357Z"
                            fill="white"/>
                    </svg> :
                    <Image src={linkedin} alt="linkedin" width={size} height={size} className={imageClassname + `
                max-xs:!w-[30px] max-xs:!h-[30px]
                `}/>}
            </Link>
        </Stack>
    )
}