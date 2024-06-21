import React, { useState, useEffect } from 'react';
import '../index.css';

const DateContainer = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });

    setCurrentDate(`${day} ${month}`);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className='dateContainer'>
      <h2 className="day">
        {currentDate.split(' ')[0]} {/* Display day */}
      </h2>
      <h2 className="month">
        {currentDate.split(' ')[1]} {/* Display month */}
      </h2>
      <div class="triangle"></div>
    </div>
  );
}

export default DateContainer;
