import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { avatarBackgrounColor } from "../utils/avatarBackgrounColor";
import { useCallback, useMemo } from "react";
import React from "react";

const GroupAvatars = ({ cardValue }) => {
  const userAvatar = cardValue.assign_users.split(",");
  const countDependency = userAvatar.length;

  return (
    <AvatarGroup size max={4}>
      {userAvatar?.map((value, i) => {
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
export const MemoizedMyComponent = React.memo(GroupAvatars);
