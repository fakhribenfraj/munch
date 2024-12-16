import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function HeartIconFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.1665 9.89846C2.1665 15.1666 6.52088 17.974 9.70838 20.4867C10.8332 21.3734 11.9165 22.2083 12.9998 22.2083C14.0832 22.2083 15.1665 21.3734 16.2913 20.4867C19.4788 17.974 23.8332 15.1666 23.8332 9.89846C23.8332 4.63028 17.8747 0.894192 12.9998 5.95896C8.12501 0.894192 2.1665 4.63028 2.1665 9.89846Z" />
      </svg>
    </SvgIcon>
  );
}
