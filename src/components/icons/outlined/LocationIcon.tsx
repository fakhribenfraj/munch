import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function ClockIcon(props: SvgIconProps) {
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
          d="M12.0004 13.53C13.7235 13.53 15.1204 12.1331 15.1204 10.41C15.1204 8.68685 13.7235 7.28998 12.0004 7.28998C10.2772 7.28998 8.88037 8.68685 8.88037 10.41C8.88037 12.1331 10.2772 13.53 12.0004 13.53Z"
          strokeWidth="1.5"
        />
        <path
          d="M3.61995 8.58998C5.58995 -0.0700226 18.42 -0.0600224 20.38 8.59998C21.53 13.68 18.37 17.98 15.6 20.64C13.59 22.58 10.41 22.58 8.38995 20.64C5.62995 17.98 2.46995 13.67 3.61995 8.58998Z"
          strokeWidth="1.5"
        />
      </svg>
    </SvgIcon>
  );
}
