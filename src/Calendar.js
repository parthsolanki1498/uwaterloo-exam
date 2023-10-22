import React, { useEffect, useState } from 'react';
import CalUi from './CalUi';
import FullCalendar from '@fullcalendar/react';
import FullCalendarComponent from './FullCalendarComponent';
// import ExamCard from './ExamCard';


const Calendar = () => {
  const [exams, setExams] = useState([]);
  const apiKey = '9D8DA60E1ECE47CD81D8BC49AD219D41'; // Replace with your actual API key

  useEffect(() => {
    fetch(`https://openapi.data.uwaterloo.ca/v3/ExamSchedules?apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data structure in the response is an array of exams
        setExams(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter and render exams
  const filteredExams = exams.filter((exam) => exam.termCode === '1219');

//   return (
//     <div className="calendar">
//       {filteredExams.map((exam, index) => (
//         <ExamCard key={index} exam={exam} />
//       ))}
//     </div>
//   );
    return (
        <div className="calendar">
        {/* <h2>Exam Schedule</h2> */}
        {/* <CalUi exams={filteredExams} /> */}
        <FullCalendarComponent exams={exams} /> 
        </div>
    );
};

export default Calendar;
