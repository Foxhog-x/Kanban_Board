import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { avatarBackgrounColor } from "../utils/avatarBackgrounColor";
import React from "react";

const GroupAvatars = ({ cardValue }) => {
  const userAvatar =
    cardValue?.assign_users && cardValue?.assign_users.split(",");

  return (
    <AvatarGroup max={4}>
      {userAvatar?.map((value) => {
        return (
          <Avatar
            key={value}
            sx={{
              bgcolor: avatarBackgrounColor,
              width: 20,
              height: 20,
            }}
            alt={value.charAt(0).toLocaleUpperCase()} //name
            src="/static/images/avatar/1.jpg" //profile image
          />
        );
      })}
    </AvatarGroup>
  );
};
export const MemoGroupavatar = React.memo(GroupAvatars);
