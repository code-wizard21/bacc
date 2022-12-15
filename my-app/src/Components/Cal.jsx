import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Cal() {
  const [value, setvalue] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setvalue} value={value}/>
    </div>
  );
}