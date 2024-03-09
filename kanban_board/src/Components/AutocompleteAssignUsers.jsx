import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function AutocompleteAssignUser() {
  return (
    <Stack spacing={3} sx={{ width: 450 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={users_List}
        getOptionLabel={(option) => option.title}
        defaultValue={[users_List[0]]}
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
