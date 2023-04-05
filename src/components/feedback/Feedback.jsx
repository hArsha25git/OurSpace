import React from "react";
import './Feedback.css'
const Feedback = ({
  feedbackData,
  handleFeedbackChange,
  handleFeedbackSubmit,
  handleclose,
}) => {
  return (
    <div className="feedback-popup">
      <div className="feedback-form">
          <h3>Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={feedbackData.name}
            onChange={handleFeedbackChange}
            required
          />

          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedbackData.feedback}
            onChange={handleFeedbackChange}
            required
          />
          <div className="bb">
            <button type="submit">Submit</button>
            <button className="cl" onClick={handleclose}>close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
