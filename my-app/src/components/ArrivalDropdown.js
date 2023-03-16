import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ArrivalSelect(props) {
  const [arrival, setArrival] = React.useState('');
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8203/flights/airports/destinations')
      .then(response => response.json())
      .then(data => {
        setOptions(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = event => {
    setArrival(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 400, maxWidth: 600 }} size="small">
      <InputLabel id="demo-select-small">Arrival Airport</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={arrival}
        label="Arrival Airport"
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
