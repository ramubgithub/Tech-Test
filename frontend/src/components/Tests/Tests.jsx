import React, { useEffect, useState } from 'react'
import './Tests.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setExamData, resetExam, showMessage } from'../redux/redux.js'
import { getQuestions } from '../data/dataConfig'
import axios from 'axios'

axios.defaults.withCredentials = true;

function Tests() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStart = (stackId) => {
    let allSections = getQuestions(stackId);

    const nodeSection = allSections.findIndex(section => section.tech.toLowerCase() === "nodejs")
    const expressSection = allSections.findIndex(section => section.tech.toLowerCase() === "expressjs")

    if(nodeSection !== -1 && expressSection !== -1) {
      const Index = Math.min(nodeSection, expressSection);

      const mergedSection = {
          tech: "nodejs and expressjs",
          questions: [...allSections[nodeSection].questions, ...allSections[expressSection].questions],
        }

      allSections = allSections.filter(section => !["nodejs", "expressjs"].includes(section.tech.toLowerCase()));

      allSections.splice(Index, 0, mergedSection);
    }

    dispatch(setExamData({stackId, sections: allSections}));
    navigate("start");
  }

  return (
    <div className="testsContainer">
      <div className="testGroup">
        <div><strong>Frontend:</strong>{" "}<span>React.js</span></div>
        <div><strong>Backend:</strong>{" "}<span>Node.js with Express.js</span></div>
        <div><strong>Database:</strong>{" "}<span>MongoDB</span></div>
        <div><hr></hr></div>
        <button className="strtBtn" onClick={() => handleStart(1)}>Start Test</button>
      </div>
      <div className="testGroup">
        <div><strong>Frontend:</strong>{" "}<span>React.js</span></div>
        <div><strong>Backend:</strong>{" "}<span>Python with Django</span></div>
        <div><strong>Database:</strong>{" "}<span>PostgreSQL</span></div>
        <div><hr></hr></div>
        <button className="strtBtn" onClick={() => handleStart(2)}>Start Test</button>
      </div>
    </div>
  )
}

export default Tests
