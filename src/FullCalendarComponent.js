import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import Modal from 'react-modal';
import './Modal.css';

Modal.setAppElement('#root');

const FullCalendarComponent = ({ exams }) => {
  const [selectedExam, setSelectedExam] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!exams || exams.length === 0) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    return moment(dateString, 'MMMM D, YYYY').format('YYYY-MM-DD');
  };

  const events = exams.map((exam) => ({
    title: exam.examDisplayName,
    start: formatDate(exam.examWindowStartDate),
    allDay: true,
    examData: exam,
  }));

  const handleEventClick = (info) => {
    const examData = info.event.extendedProps.examData;
    setSelectedExam(examData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExam(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  };

  return (
    <div className="full-calendar" onKeyDown={handleKeyDown}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        dayMaxEventRows={3}
        eventClick={handleEventClick}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Exam Details"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        {selectedExam && (
          <div className="modal-content">
            <h3>Exam: {selectedExam.examDisplayName}</h3>
            <p>Sections: {selectedExam.sections}</p>
            <p>Mode of Examination: {selectedExam.isOnlineDescription}</p>
            <p>Exam Start Time: {selectedExam.examWindowStartTime}</p>
            <p>Exam Duration: {selectedExam.examDuration}</p>
            <p>Notes: {selectedExam.notes}</p>
            <p>Term code: {selectedExam.termCode}</p>
            {/* Add more exam details here */}
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FullCalendarComponent;
