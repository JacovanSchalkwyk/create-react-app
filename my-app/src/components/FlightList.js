import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

export default function FlightList(props) {
  const { flights } = props;
  console.log(flights);

  const formatDate = date => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(date).toLocaleString('en-US', options);
  };

  const handleClick = flight => {
    console.log(flight);
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
      <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
        <Card sx={{ maxWidth: 800 }}>
          {flights.map((flight, index) => (
            <CardContent>
              <CardActionArea
                onClick={() => {
                  handleClick(flight);
                }}
              >
                <React.Fragment key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={`${flight.origin} - ${flight.destination}`}
                      secondary={
                        <React.Fragment>
                          {`Flight ${flight.flightNumber}: ${formatDate(
                            flight.departureTime
                          )} - ${formatDate(flight.arrivalTime)}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              </CardActionArea>
            </CardContent>
          ))}
        </Card>
      </List>
    </div>
  );
}
