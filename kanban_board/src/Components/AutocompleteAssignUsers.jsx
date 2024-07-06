import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


export default function AutocompleteAssignUser({ setCardDataAssign }) {



  return (
    // <Stack  spacing={3} sx={{ minWidth: 250 }}>
    <Autocomplete
      multiple
      onChange={(e, value) => {
        console.log(value, "value")
        setCardDataAssign((prev) => {

          return { ...prev, assignee_id: value };
        });
      }}
      id="tags-outlined"
      options={users}
      getOptionLabel={(option) => option.username}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField {...params} label="Assign_Team_Members" placeholder="name" />
      )}
    />
    // </Stack>
  );
}
const parsedData = JSON.parse(localStorage.getItem("userData"));
const users = Array.isArray(parsedData) ? parsedData : [parsedData];
console.log(users)

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top




