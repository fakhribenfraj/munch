import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function HomeIconFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5192 8.32274C2 9.27128 2 10.4155 2 12.7039V14.225C2 18.1258 2 20.0763 3.17157 21.2881C4.34315 22.5 6.22876 22.5 10 22.5H14C17.7712 22.5 19.6569 22.5 20.8284 21.2881C22 20.0763 22 18.1258 22 14.225V12.7039C22 10.4155 22 9.27128 21.4808 8.32274C20.9616 7.37421 20.0131 6.78551 18.116 5.60812L16.116 4.36687C14.1106 3.12229 13.1079 2.5 12 2.5C10.8921 2.5 9.88939 3.12229 7.88403 4.36687L5.88403 5.60813C3.98695 6.78551 3.0384 7.37421 2.5192 8.32274ZM9 17.75C8.58579 17.75 8.25 18.0858 8.25 18.5C8.25 18.9142 8.58579 19.25 9 19.25H15C15.4142 19.25 15.75 18.9142 15.75 18.5C15.75 18.0858 15.4142 17.75 15 17.75H9Z"
        />
      </svg>
    </SvgIcon>
  );
}
