import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import * as React from 'react';
class Flight {
  constructor(
    id,
    flightNumber,
    origin,
    destination,
    departureTime,
    arrivalTime,
    seatsAvailable,
    seatCost
  ) {
    this.id = id;
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.seatsAvailable = seatsAvailable;
    this.seatCost = seatCost;
  }

  // PUT method to get flights
  static async getFlights(departure, destination) {
    try {
      const response = await fetch('http://localhost:8203/flights/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchType: 'ORIGIN_DESTINATION_SEARCH',
          daysToDeparture: 7,
          departureDateFrom: '2023-04-01T08:00',
          departureDateTo: '2023-04-01T20:00',
          origin: departure,
          destination: destination,
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  }
}

export default function SelectFlightPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const departure = params.get('departure');
  const arrival = params.get('arrival');
  const date = params.get('date');
  console.log(departure);
  console.log(arrival);
  console.log(date);

  const [flights, setFlights] = useState([]);

  React.useEffect(() => {
    Flight.getFlights(departure, arrival)
      .then(flights => {
        setFlights(flights);
      })
      .catch(error => {
        console.error('Error getting flights:', error);
      });
  }, [departure, arrival]);

  return (
    <div>
      <h1>Available flights:</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            <div>Flight Number: {flight.flightNumber}</div>
            <div>Origin: {flight.origin}</div>
            <div>Destination: {flight.destination}</div>
            <div>Departure Time: {flight.departureTime}</div>
            <div>Arrival Time: {flight.arrivalTime}</div>
            <div>Seats Available: {flight.seatsAvailable}</div>
            <div>Seat Cost: {flight.seatCost}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
