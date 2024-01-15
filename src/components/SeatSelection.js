// src/components/SeatSelection.js
import React, { useState } from 'react';

const SeatSelection = ({ onSeatSelect }) => {
  const totalSeats = 60;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    // Toggle seat selection
    const updatedSeats = selectedSeats.includes(seatNumber)
      ? selectedSeats.filter(seat => seat !== seatNumber)
      : [...selectedSeats, seatNumber];

    setSelectedSeats(updatedSeats);
    onSeatSelect(updatedSeats);
  };

  return (
    <div>
      <h2>Seat Selection</h2>
      <div className="seat-container">
        {[...Array(totalSeats)].map((_, index) => (
          <div
            key={index + 1}
            className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
