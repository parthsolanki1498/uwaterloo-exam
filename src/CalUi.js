import React from 'react';

const CalUi = ({ exams }) => {
  // Create a function to format the date as "Month Day" (e.g., "December 15")
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  return (
    <div className="calendar-ui">
      {exams.map((exam, index) => (
        <div key={index} className="calendar-event">
          <div className="event-date">{formatDate(exam.examWindowStartDate)}</div>
          <div className="event-details">
            <h3>{exam.examDisplayName}</h3>
            <p>{exam.sections}</p>
            <p>{exam.examWindowStartTime}</p>
            <p>{exam.examDuration}</p>
            <p>{exam.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalUi;
