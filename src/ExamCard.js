// ExamCard.js
import React from 'react';

const ExamCard = ({ exam }) => {
  return (
    <div className="exam-card">
      <h3>{exam.examDisplayName}</h3>
      <p>Section: {exam.sections}</p>
      <p>Day: {exam.day}</p>
      <p>Start Date: {exam.examWindowStartDate}</p>
      <p>Start Time: {exam.examWindowStartTime}</p>
      <p>Duration: {exam.examDuration}</p>
      <p>Notes: {exam.notes}</p>
    </div>
  );
};

export default ExamCard;
