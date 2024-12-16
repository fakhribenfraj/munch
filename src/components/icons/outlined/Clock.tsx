import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function ClockIconOutlined(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path
          d="M22 12.1C22 17.62 17.52 22.1 12 22.1C6.48 22.1 2 17.62 2 12.1C2 6.57998 6.48 2.09998 12 2.09998C17.52 2.09998 22 6.57998 22 12.1Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.7099 15.28L12.6099 13.43C12.0699 13.11 11.6299 12.34 11.6299 11.71V7.60999"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
