import React, { useState, useEffect } from 'react';
import axios from '../services/axios';

const StudentDashboard = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get('/api/schedule/student')
      .then(response => setSchedule(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Ваше расписание:</h1>
      <ul>
        {schedule.map(item => (
          <li key={item.id}>{item.subject} - {item.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
