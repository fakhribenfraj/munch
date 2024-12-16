import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function ArrowsDownIconOutlined(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
      >
        <path
          d="M16.84 7.09998L10.32 13.62C9.55 14.39 8.29 14.39 7.52 13.62L1 7.09998"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.84 1.09998L10.32 7.61998C9.55 8.38998 8.29 8.38998 7.52 7.61998L1 1.09998"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
