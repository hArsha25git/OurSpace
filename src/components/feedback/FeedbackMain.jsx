import React from "react";
import "../help/Help.css";
import { useState } from "react";
import Feedback from "./Feedback.jsx";
const FeedbackMain=()=>{
     const [showFeedback, setShowFeedback] = useState(false);
     const [showfbRec, setshowfbRec] = useState(false);
     const [feedbackData, setFeedbackData] = useState({
       name: "",
       feedback: "",
     });
     const [submittedFeedbackData, setSubmittedFeedbackData] = useState([]);
      const handleFeedbackClick = () => {
        setShowFeedback(!showFeedback);
      };

      const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log(feedbackData);
        setSubmittedFeedbackData([...submittedFeedbackData, feedbackData]);
        setShowFeedback(false);
        setFeedbackData({ name: "", feedback: "" });
      };
      const handleclose = () => {
        setShowFeedback(false);
      };

      const handleFeedbackChange = (e) => {
        setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
      };
      const showfbhandler = () => {
        setshowfbRec(!showfbRec);
      };
 return (
   <>
     <div className="question-container">
       <div>
         Thank you for visiting our page! We appreciate your interest and would
         be grateful for any feedback you may have.
       </div>
       <button className="feedback-button" onClick={handleFeedbackClick}>
         Feedback
       </button>
     </div>
     <button className="question-container" onClick={showfbhandler}>
       <h2>Feedback received</h2>
       {showfbRec && (
         // <div className="help-container">
         <div>
           {submittedFeedbackData.map((feedback, index) => (
             <div key={index}>
               <div>
                 <b>
                   <hr></hr>
                 </b>
                 <p>
                   <b>Name: </b>
                   {feedback.name}
                 </p>
                 <p>
                   <b>Feedback:</b> {feedback.feedback}
                 </p>
               </div>
             </div>
           ))}
         </div>
         // </div>
       )}
     </button>

     {showFeedback && (
       <Feedback
         feedbackData={feedbackData}
         handleFeedbackChange={handleFeedbackChange}
         handleFeedbackSubmit={handleFeedbackSubmit}
         handleclose={handleclose}
       />
     )}
   </>
 );
}
export default FeedbackMain;