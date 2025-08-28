import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export function SearchBar() {
  return (
    <div className="flex items-center justify-end w-full px-4 sm:px-8 lg:px-0">
      <TextField
        id="outlined-basic"
        label="What are you looking for?"
        variant="outlined"
        className="w-40 sm:w-64 md:w-80"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}