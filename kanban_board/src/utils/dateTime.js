// eslint-disable-next-line no-unused-vars
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
export const dateTimeConverter = (card_Info_Due_Date) => {
  const dateTime = new Date(card_Info_Due_Date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
  };
  const formattedDateTime = dateTime.toLocaleString("en", options);

  return formattedDateTime;
};

export const timeLeftFromNow = (endDueDate) => {
  return dayjs().from(dayjs(endDueDate), true);
};
