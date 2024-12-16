import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function HomeIconFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 21"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5192 6.32274C0 7.27128 0 8.41549 0 10.7039V12.225C0 16.1258 0 18.0763 1.17157 19.2881C2.34315 20.5 4.22876 20.5 8 20.5H12C15.7712 20.5 17.6569 20.5 18.8284 19.2881C20 18.0763 20 16.1258 20 12.225V10.7039C20 8.41549 20 7.27128 19.4808 6.32274C18.9616 5.37421 18.0131 4.78551 16.116 3.60812L14.116 2.36687C12.1106 1.12229 11.1079 0.5 10 0.5C8.89206 0.5 7.88939 1.12229 5.88403 2.36687L3.88403 3.60813C1.98695 4.78551 1.0384 5.37421 0.5192 6.32274ZM7 15.75C6.58579 15.75 6.25 16.0858 6.25 16.5C6.25 16.9142 6.58579 17.25 7 17.25H13C13.4142 17.25 13.75 16.9142 13.75 16.5C13.75 16.0858 13.4142 15.75 13 15.75H7Z"
        />
      </svg>
    </SvgIcon>
  );
}
