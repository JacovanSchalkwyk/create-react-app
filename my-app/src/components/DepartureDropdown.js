import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DepartureSelect(props) {
  const [departure, setDestination] = React.useState('');
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8203/flights/airports/origins')
      .then(response => response.json())
      .then(data => {
        setOptions(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = event => {
    const selectedValue = event.target.value;
    setDestination(selectedValue);
    props.onChange(selectedValue);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 400, maxWidth: 600 }} size="small">
      <InputLabel id="demo-select-small">Departure Airport</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={departure}
        label="Departure Airport"
        onChange={handleChange}
      >
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
