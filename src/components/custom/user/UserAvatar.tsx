import PersonOffIcon from "@mui/icons-material/PersonOff";
import { Avatar, AvatarProps } from "@mui/material";

type UserAvatarProps = AvatarProps & {
  name: string | null;
  image: string | null;
};
const UserAvatar = ({ name, image, sx, ...props }: UserAvatarProps) => {
  return (
    <Avatar
      sx={{
        cursor: "pointer",
        textTransform: "uppercase",
        ...sx,
      }}
      src={image ?? undefined}
      {...props}
    >
      {name ? (
        name.split(" ").length > 1 ? (
          `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
        ) : (
          `${name.split(" ")[0][0]}${name.split(" ")[0][1]}`
        )
      ) : (
        <PersonOffIcon />
      )}
    </Avatar>
  );
};

export default UserAvatar;
