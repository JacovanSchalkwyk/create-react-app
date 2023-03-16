import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DepartureSelect from './DepartureDropdown';
import ArrivalSelect from './ArrivalDropdown';
import DatePickerOwn from './DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import SelectFlightPage from '../SelectFlightPage';

export default function ActionAreaCard() {
  const navigate = useNavigate();
  const [selectedDeparture, setSelectedDeparture] = React.useState('');
  const [selectedArrival, setSelectedArrival] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');

  const handleDepartureChange = value => {
    setSelectedDeparture(value);
    console.log(value);
  };

  const handleArrivalChange = value => {
    setSelectedArrival(value);
    console.log(value);
  };

  const handleDateChange = value => {
    setSelectedDate(value);
    console.log(value);
  };

  const handleClick = () => {
    if (
      selectedDeparture === '' ||
      selectedArrival === '' ||
      selectedDate === ''
    ) {
      alert('Please fill in all fields');
      return;
    }
    navigate(
      `/SelectFlightPage?departure=${selectedDeparture}&arrival=${selectedArrival}&date=${selectedDate}`
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
      }}
    >
      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Flight
          </Typography>
          <div>
            <DepartureSelect onChange={handleDepartureChange} />
            <ArrivalSelect onChange={handleArrivalChange} />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Departure Date" onChange={handleDateChange} />
            </LocalizationProvider>
          </div>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <Button variant="contained" onClick={handleClick}>
              See Available Flights
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
