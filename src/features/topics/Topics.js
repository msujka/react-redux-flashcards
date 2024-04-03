import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selector
import { selectTopics } from "./topicsSlice";
import { useDispatch, useSelector } from 'react-redux';

/*
In src/features/topics/Topics.js, import the selector defined in your slice 
and use it to access all the topics in state, 
and replace the empty object currently assigned to topics with the topics in state.
*/

export default function Topics() {
  const topics = useSelector(selectTopics);

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          console.log('Topics.js:topic:' + JSON.stringify(topic)),
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
