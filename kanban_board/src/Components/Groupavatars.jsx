import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export const GroupAvatars = ({ cardValues }) => {
  console.log(cardValues, "card valueslfjslk");
  return (
    <AvatarGroup size max={4}>
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt=" " //name
        src="/static/images/avatar/1.jpg" //profile image
      />
    </AvatarGroup>
  );
};
