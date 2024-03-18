import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";

export default function AutocompleteAssignUser({ setCardDataAssign }) {
  const [assign, setAssign] = useState(null);

  // const setDefaultOption = () => {
  //   setAssign((prev) => {
  //     return { ...prev, title: "onkar" };
  //   });
  // };
  // useEffect(() => {
  //   setDefaultOption();
  // }, []);
  // console.log(assign);
  console.log(assign);
  return (
    <Stack spacing={3} sx={{ width: 450 }}>
      <Autocomplete
        multiple
        onChange={(e, value) => {
          setAssign(value);
        }}
        id="tags-outlined"
        options={users_List}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Assign_Team_Members"
            placeholder="name"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const users_List = [{ title: "onkar" }, { title: "swapanil" }];
