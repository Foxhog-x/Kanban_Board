import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Stack, border, borderRadius, flexbox, grid, width } from "@mui/system";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "@mui/icons-material/Edit";
import AdjustIcon from "@mui/icons-material/Adjust";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Avatar from "@mui/material/Avatar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DescriptionIcon from "@mui/icons-material/Description";
import { MuiMenuCard } from "./MuiMenuCard";
export default function Rightsidecardinfo({ infoRightCard, state, setState }) {
  const StyledChip = styled(Chip)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius - 2, // Use theme's default (4px)
    fontSize: theme.typography.fontSize - 2, // Adjust font size (optional)
    padding: theme.spacing(0.5, 1),
  }));
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ maxWidth: 600 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
          <EditIcon />
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
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
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
            <Typography>5 March 2024</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={10} alignItems={"center"}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <AssignmentIndIcon />
            <Typography>Assignee</Typography>
          </Stack>
          <Box sx={{ maxWidth: 500, overflow: "auto" }}>
            <Stack direction={"row"} alignItems={"baseline"} spacing={1}>
              {/* Place your Assignee content here */}
              <Avatar
                sx={{ width: 20, height: 20 }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
              <Typography>CindyBaker</Typography>
              <Avatar
                sx={{ width: 20, height: 20 }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
              <Typography>CindyBaker</Typography>
              <Avatar
                sx={{ width: 20, height: 20 }}
                alt="Cindy Baker"
                src="/static/images/avatar/3.jpg"
              />
              <Typography>CindyBaker</Typography>
            </Stack>
          </Box>
          <Button sx={{}}>
            <Typography display={"flex"} gap={1} alignItems={"center"}>
              <PersonAddIcon />
              Invite
            </Typography>
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={10} gap={2}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <PriorityHighIcon />
            <Typography>Priority</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <StyledChip
              size="small"
              // color={
              //   cardValue?.priority === "Low"
              //     ? "success"
              //     : cardValue?.priority === "Medium"
              //     ? "warning"
              //     : cardValue?.priority === "High"
              //     ? "error"
              //     : "default"
              // }
              // label={cardValue?.priority}
              label={"High"}
            />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={10} gap={2}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <DescriptionIcon />
            <Typography>Description</Typography>
          </Stack>
        </Stack>
        <Box
          width={550}
          height={100}
          overflow={"auto"}
          border={1}
          borderRadius={3}
        >
          <div>
            <Typography pl={1} pr={1}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              iusto nam inventore doloribus veritatis quas quo vitae, dicta
              voluptas dolore ratione itaque? Lorem ipsum dolor sit amet Lorem
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              repudiandae quae eveniet ipsum, vero exercitationem obcaecati
              molestiae incidunt distinctio modi natus rem explicabo accusamus
              reprehenderit alias itaque labore maxime, mollitia non recusandae
              debitis maiores. Dolorum rem autem quo, aperiam pariatur
              doloremque molestias temporibus. Rerum!
            </Typography>
          </div>
        </Box>
        <Divider />
        <Stack direction={"row"} spacing={10} gap={2}>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <AttachFileIcon />
            <Typography>Attachement</Typography>
          </Stack>
        </Stack>

        <Box
          width={550}
          height={75}
          overflow={"auto"}
          border={1}
          borderRadius={3}
        >
          <div></div>
        </Box>
        <Divider />
      </Stack>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
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
}
