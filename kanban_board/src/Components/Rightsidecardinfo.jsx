import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack, border, borderRadius, flexbox, grid, width } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import AdjustIcon from "@mui/icons-material/Adjust";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DescriptionIcon from "@mui/icons-material/Description";
import { dateTimeConverter } from "../utils/dateTime";
import { Reactquill } from "./Reactquill";
import SaveIcon from "@mui/icons-material/Save";
import { useFetchCards } from "../hooks/useFetchCards";
const Rightsidecardinfos = ({
  reRender,
  setReRender,
  infoRightCard,
  state,
  setState,
}) => {
  const [editBool, setEditBool] = React.useState(false);
  const [handleEditSave, setHandleEditSave] = React.useState(false);
  const [checkIfEdit, setCheckIfEdit] = React.useState(false);

  const handleSave = () => {
    setHandleEditSave(true);
    setCheckIfEdit(true);
  };

  const StyledChip = styled(Chip)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius - 2, // Use theme's default (4px)
    fontSize: theme.typography.fontSize - 2, // Adjust font size (optional)
    padding: theme.spacing(0.5, 1),
  }));
  console.log(infoRightCard, "inforightside card");
  const toggleDrawer = (anchor, open) => (event) => {
    if (checkIfEdit) {
      setCheckIfEdit(false);
      setReRender(!reRender);
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const userAvatar =
    infoRightCard?.assign_users && infoRightCard?.assign_users.split(",");

  const list = (anchor) => (
    <Box
      sx={{ maxWidth: 600 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <div className="coverphoto_rightsidecard"></div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Typography variant="h4" padding={2}>
            <ZoomOutMapIcon />
          </Typography>
          <Typography alignItems={"center"} variant="h5" padding={2}>
            {infoRightCard.name}
          </Typography>
        </Stack>
        <Stack
          divider={<Divider />}
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          padding={3}
        >
          <Divider />
          <IconButton onClick={() => setEditBool(true)}>
            {editBool ? (
              <IconButton onClick={() => handleSave()}>
                <SaveIcon />{" "}
              </IconButton>
            ) : (
              <EditIcon />
            )}
          </IconButton>

          <DeleteForeverIcon />
        </Stack>
      </Stack>
      <Divider />
      <Typography padding={3} variant="h4">
        {infoRightCard.title}
      </Typography>

      <Stack spacing={3} padding={3} justifyContent={"start"}>
        <Stack direction={"row"} spacing={12}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <AdjustIcon />
            <Typography>Status</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <LensOutlinedIcon fontSize="small" />
            <Typography>On Progress</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={10}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <CalendarMonthIcon />
            <Typography>Due Date</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography>{dateTimeConverter(infoRightCard.due_date)}</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={10}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <AssignmentIndIcon />
            <Typography>Assignee</Typography>
          </Stack>
          <Stack direction={"row"}>
            {userAvatar?.map((value) => {
              return (
                <>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <Typography gap={2}>{value}</Typography>
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Stack>

        <Stack direction={"row"} spacing={10} gap={2}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <PriorityHighIcon />
            <Typography>Priority</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <StyledChip
              size="small"
              color={
                infoRightCard?.priority === "Low"
                  ? "success"
                  : infoRightCard?.priority === "Medium"
                  ? "warning"
                  : infoRightCard?.priority === "High"
                  ? "error"
                  : "default"
              }
              // label={cardValue?.priority}
              label={infoRightCard.priority}
            />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={10} gap={2}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <DescriptionIcon />
            <Typography>Description</Typography>
          </Stack>
        </Stack>
        <Reactquill
          card_id={infoRightCard?.card_id}
          editableText={infoRightCard?.html_content}
          editBool={editBool}
          setEditBool={setEditBool}
          setHandleEditSave={setHandleEditSave}
          handleEditSave={handleEditSave}
        />
      </Stack>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor, i) => (
        <React.Fragment key={anchor}>
          <Drawer
            key={i}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export const Rightsidecardinfo = React.memo(Rightsidecardinfos);
