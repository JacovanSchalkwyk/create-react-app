import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DepartureSelect() {
  const [departure, setDestination] = React.useState('');

  const handleChange = event => {
    setDestination(event.target.value);
  };

  const options = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Mango',
      value: 'mango',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Pineapple',
      value: 'pineapple',
    },
  ];

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
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
