import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function AddSquareIconFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 21 21"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.69 0.5H6.31C2.67 0.5 0.5 2.67 0.5 6.31V14.68C0.5 18.33 2.67 20.5 6.31 20.5H14.68C18.32 20.5 20.49 18.33 20.49 14.69V6.31C20.5 2.67 18.33 0.5 14.69 0.5ZM14.5 11.25H11.25V14.5C11.25 14.91 10.91 15.25 10.5 15.25C10.09 15.25 9.75 14.91 9.75 14.5V11.25H6.5C6.09 11.25 5.75 10.91 5.75 10.5C5.75 10.09 6.09 9.75 6.5 9.75H9.75V6.5C9.75 6.09 10.09 5.75 10.5 5.75C10.91 5.75 11.25 6.09 11.25 6.5V9.75H14.5C14.91 9.75 15.25 10.09 15.25 10.5C15.25 10.91 14.91 11.25 14.5 11.25Z" />
      </svg>
    </SvgIcon>
  );
}
