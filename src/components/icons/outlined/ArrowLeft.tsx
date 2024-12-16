import { SvgIconProps } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function ArrowLeftIconOutlined(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.40802 0.925476C8.72532 1.24278 8.72532 1.75722 8.40802 2.07452L3.29504 7.1875H18.6668C19.1156 7.1875 19.4793 7.55127 19.4793 8C19.4793 8.44873 19.1156 8.8125 18.6668 8.8125H3.29504L8.40802 13.9255C8.72532 14.2428 8.72532 14.7572 8.40802 15.0745C8.09072 15.3918 7.57627 15.3918 7.25897 15.0745L0.758972 8.57452C0.441671 8.25722 0.441671 7.74278 0.758972 7.42548L7.25897 0.925476C7.57627 0.608175 8.09072 0.608175 8.40802 0.925476Z"
        />
      </svg>
    </SvgIcon>
  );
}
