/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckBox } from "./CheckBox";
import { MuiMenu } from "./MuiMenu";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { timeLeftFromNow } from "../utils/dateTime";
import { priorityColor } from "../utils/priorityColor";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { useDraggable } from "@dnd-kit/core";
import {
  CardConsumer,
  CardContext,
  CardProvider,
} from "../context/CardContext";
import { MemoGroupavatar } from "./Groupavatars";
import { labelChipArrayString } from "../utils/labelChipArrayString";

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius - 4,
  fontSize: theme.typography.fontSize - 2,
  padding: theme.spacing(0.5, 1),
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 6,
}));

const StylelabelStyleChip = styled(Chip)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius - 4,
  fontSize: theme.typography.fontSize - 2,
  margin: 2,
}));
export const Cards = ({ id, handleCardClick, reRender, setReRender }) => {
  const cardValues = useContext(CardContext);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: cardValues?.column_id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zindex: -1,
      }
    : undefined;
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  const labelChip =
    cardValues?.labels_name && cardValues?.labels_name.split(",");

  const card = (
    <>
      <Card variant="outlined" sx={{ maxWidth: 318, zIndex: -1 }}>
        <StyledCardContent>
          <Stack
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            direction="row"
            padding={"2px"}
            justifyContent={"space-between"}
          >
            <StyledChip
              size="small"
              color={
                cardValues?.priority === "Low"
                  ? "success"
                  : cardValues?.priority === "Medium"
                  ? "warning"
                  : cardValues?.priority === "High"
                  ? "error"
                  : "default"
              }
              label={cardValues?.priority}
            />

            {/* <MuiMenu card_id={cardValues.card_id} /> */}
          </Stack>
          <Box
            ml={1}
            display={"flex"}
            justifyContent={"start"}
            flexWrap={"wrap"}
            mb={2}
          >
            <>
              {labelChip &&
                labelChip.map((value) => {
                  return (
                    <StylelabelStyleChip
                      variant="outlined"
                      size="small"
                      key={value}
                      label={<small>{value}</small>}
                    />
                  );
                })}
            </>
          </Box>

          <Box onClick={() => handleCardClick(cardValues)}>
            <Stack>
              <CardActionArea>
                {/* <img
                  src={"/light_grey_dots_background.jpg"}
                  alt="image"
                  width={300}
                  height={125}
                /> */}
                <Typography
                  color="text.secondary"
                  align="left"
                  variant="h6"
                  mb={2}
                >
                  {cardValues.title}
                </Typography>
              </CardActionArea>
            </Stack>
          </Box>
        </StyledCardContent>
        <Divider />
        <Box sx={{ p: 1 }}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={1.5}
          >
            <Stack direction={"row"}>
              <MemoGroupavatar cardValue={cardValues} />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"end"}
              alignItems={"center"}
              gap={1}
            >
              <Badge badgeContent={0}>
                <AttachFileIcon fontSize="small" />
              </Badge>
              <AccessTimeOutlinedIcon fontSize="small" />
              <small>{timeLeftFromNow(cardValues.due_date)}</small>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </>
  );
  return (
    <Box
      sx={{
        minWidth: 318,
        borderRadius: "20px",
        marginTop: "5px",
        marginRight: "10px",
      }}
    >
      <Card style={style} variant="outlined">
        {card}
      </Card>
    </Box>
  );
};
