import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DepartureSelect from './DepartureDropdown';
import ArrivalSelect from './ArrivalDropdown';
export default function ActionAreaCard() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25vh',
      }}
    >
      <Card sx={{ maxWidth: 800 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Flight
            </Typography>
            <DepartureSelect />
            <ArrivalSelect />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
