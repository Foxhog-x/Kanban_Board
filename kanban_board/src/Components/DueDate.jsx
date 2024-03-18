import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/en-gb";
// import { useEffect, useState } from "react";
import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
export default function DueDate({ setCardDataDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Start Date"
          defaultValue={dayjs()}
          onChange={(date) =>
            setCardDataDate((prev) => {
              return {
                ...prev,
                start_date: new dayjs(date.valueOf())
                  .locale("en-gb")
                  .format("YYYY-MM-dd"),
              };
            })
          }
        />
        <DatePicker
          label="Last Date"
          onChange={(date) =>
            setCardDataDate((prev) => {
              return {
                ...prev,
                due_date: new dayjs(date.valueOf())
                  .locale("en-gb")
                  .format("YYYY-MM-DD"),
              };
            })
          }
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
