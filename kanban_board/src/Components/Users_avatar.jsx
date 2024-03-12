import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export const Users_avatar = () => {
  return (
    <AvatarGroup total={3}>
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt="Travis Howard"
        src="/static/images/avatar/2.jpg"
      />
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt="Agnes Walker"
        src="/static/images/avatar/4.jpg"
      />
      <Avatar
        sx={{ width: 20, height: 20 }}
        alt="Trevor Henderson"
        src="/static/images/avatar/5.jpg"
      />
    </AvatarGroup>
  );
};
