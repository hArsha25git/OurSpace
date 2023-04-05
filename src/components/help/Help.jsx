
import './Help.css';
import Feedback from "../feedback/Feedback";
import React, { useState } from 'react';


const Help = () => {

  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);
  const [showQuestion4, setShowQuestion4] = useState(false);
  const [showQuestion5, setShowQuestion5] = useState(false);
  const [showQuestion6, setShowQuestion6] = useState(false);
  const [showQuestion7, setShowQuestion7] = useState(false);
   const [showQuestion8, setShowQuestion8] = useState(false);
    const [showQuestion9, setShowQuestion9] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showfbRec, setshowfbRec] = useState(false);
  const [feedbackData, setFeedbackData] = useState({ name: "", feedback: "" });
  const [submittedFeedbackData, setSubmittedFeedbackData] = useState([]);


  const toggleQuestion1 = () => setShowQuestion1(!showQuestion1);
  const toggleQuestion2 = () => setShowQuestion2(!showQuestion2);
  const toggleQuestion3 = () => setShowQuestion3(!showQuestion3);
  const toggleQuestion4 = () => setShowQuestion4(!showQuestion4);
  const toggleQuestion5 = () => setShowQuestion5(!showQuestion5);
   const toggleQuestion6= () => setShowQuestion6(!showQuestion6);
    const toggleQuestion7 = () => setShowQuestion7(!showQuestion7);
    const toggleQuestion8 = () => setShowQuestion8(!showQuestion1);
    const toggleQuestion9 = () => setShowQuestion9(!showQuestion1);
  const handleFeedbackClick = () => {
    setShowFeedback(!showFeedback);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log(feedbackData);
    setSubmittedFeedbackData([...submittedFeedbackData,feedbackData]);
    setShowFeedback(false);
    setFeedbackData({ name: "", feedback: "" });
  };
  const handleclose=()=>{
    setShowFeedback(false);
  };

  const handleFeedbackChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value })};
  const showfbhandler=()=>{
    setshowfbRec(!showfbRec);
  }

  return (
    <>
      <div className="help-container">
        <h2>Help</h2>
        <div className="questions-container">
          <div className="question-container" onClick={toggleQuestion1}>
            <h3>The Mission of the project</h3>
            {showQuestion1 && (
              <p>
                Welcome to our website, which serves as a comprehensive
                portfolio showcasing the members of Team Musketeers. Our team
                comprises individuals who work together to learn and
                collaborate, and have devoted considerable effort to presenting
                their skills through this remarkable portfolio. In essence, our
                mission is to share the story of Team Musketeers' journey and
                highlight our collective achievements, skills etc.., while also
                providing visitors with convenient ways to connect with us.
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion2}>
            <h3>Major Features included in the project</h3>
            {showQuestion2 && (
              <p>
                This portfolio includes features like: Team Details, Learnings,
                About Us Page, Track of Project, Discussion Session, Contact Us
                Page, Help
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion3}>
            <h3>How can a visitor contact the team?</h3>
            {showQuestion3 && (
              <p>
                We designed a separate contact us which can be viwed in the nav
                bar.Visitor can simply contact us through the provided phn no
                and email .A visitor can directly send the message by just
                filling in the datails and our team will reach out them
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion4}>
            <h3>What are the resourses used by the team?</h3>
            {showQuestion4 && (
              <p>
                There are plenty of resources used by each and every individual
                of the team,to make it easier for the visitors we designed a
                learnings tab where all the details about the resourses are
                available that are followed and reccomended by the team members
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion5}>
            <h3>What are the worked on modals team worked?</h3>
            {showQuestion5 && (
              <p>
                U can get a list of examples on which the team worked from the
                day 1 of the journey in the about us page.When u navigate to
                about us page u can see some posts of the worked on examples of
                team.
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion6}>
            <h3>How can a visitor post a question?</h3>
            {showQuestion6 && (
              <p>
                We Designed a page Discussion where a question can be raised and
                team replys with there possible solutions
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion7}>
            <h3>Can a visitor provide the feedback?How?</h3>
            {showQuestion7 && (
              <p>
                Yes .A visitor can visirt the help page and at the bottom we
                have a button feedback which by clicking displays a form the
                visitor can fill the form and can submit the form.The feedback
                is directly send to the team.
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion8}>
            <h3>where can the team view the feedback</h3>
            {showQuestion8 && (
              <p>
                In the help page at the bottom above the feedback button there
                is a feedback recevied row which can be viwed by simply clicking
                on it
              </p>
            )}
          </div>
          <div className="question-container" onClick={toggleQuestion9}>
            <h3>How can we Login </h3>
            {showQuestion9 && (
              <p>
                If u r a new user, locate the "Sign Up" button, provide your personal information in the designated
                fields, and click "Submit"; to log in, enter your username/email
                and password in the designated fields on the login page and
                click "Login".
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
