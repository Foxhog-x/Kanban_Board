import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function AutocompleteAssignUser({ setCardDataAssign }) {
  return (
    // <Stack  spacing={3} sx={{ minWidth: 250 }}>
    <Autocomplete
      multiple
      onChange={(e, value) => {
        setCardDataAssign((prev) => {
          return { ...prev, assignee_id: value };
        });
      }}
      id="tags-outlined"
      options={users_List}
      getOptionLabel={(option) => option.username}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label="Assign_Team_Members" placeholder="name" />
      )}
    />
    // </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const users_List = [
//   { user_id: 1, username: "black_mamba" },
//   { user_id: 2, username: "test_user" },
//   { user_id: 3, username: "see_me" },
// ];
const userdata = JSON.parse(localStorage.getItem("userData"));

const users_List = userdata ? userdata : [{}];
