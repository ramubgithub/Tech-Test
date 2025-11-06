import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './StartExam.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setAnswer, setSelectedQuestion, setSelectedSection, loadFromStorage, clearAnswer, loadTimerFromStorage, resetTimer, decrementTimer, resetExam, showMessage } from '../redux/redux'

function StartExam() {
  const dispatch = useDispatch();
  const { sections, selectedSection, selectedQuestion, answers, timeLeft, stackId } = useSelector((state) => state.exam);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
      const checkAuthUser = async() => {
        try {
          const token = localStorage.getItem("token");
          await axios.post(`${import.meta.env.VITE_BACKEND_URL}/authenticate`,
            {
              token
            }
          );
          setAuthorized(true);
        }
        catch(err) {
          if(err.response?.status === 401) {
            localStorage.removeItem("token");
            navigate("/login");
            return;
          }
          dispatch(showMessage({msg: "Internal server error...", isSuccess: false}))
        }
        finally {
          setLoading(false);
        }
      }
    
      checkAuthUser();
    }, []);

    
    useEffect(() => {
    if(localStorage.getItem("examSubmitted") === "true") {
      localStorage.removeItem("examSubmitted");
      dispatch(resetTimer());
      dispatch(resetExam());
      localStorage.removeItem("examState");
      localStorage.removeItem("examTimer");
      dispatch(showMessage({msg: "Submit details added successfully!", isSuccess: true}));
      navigate("/tests");
    }
  }, [navigate]);
  
  const submitExam = async () => {
    try{
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/submitdetails`,
          {stackId, answers},
          {headers: {"Content-Type":"application/json"}}
        );
        dispatch(showMessage({msg: "Submit details added successfully!", isSuccess: true}));
      }
      catch(err) {
        dispatch(showMessage({msg: "Internal server error.", isSuccess: false}));
      }
      dispatch(resetTimer());
      dispatch(resetExam());
      localStorage.removeItem("examState");
      localStorage.removeItem("examTimer");
      navigate("/tests");
    }
    
    useEffect(() => {
      const handleBeforeUnload = () => {
        const payload = {
          stackId: stackId,
          answers: answers
        };
        console.log(payload);
        const blob = new Blob([JSON.stringify(payload)], {type: "application/json"});
        navigator.sendBeacon(`${import.meta.env.VITE_BACKEND_URL}/submitdetails`, blob);
        localStorage.setItem("examSubmitted", "true");
      };
      
      window.addEventListener("beforeunload", handleBeforeUnload);
      
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      }
    }, [stackId, answers]);
    
    useEffect(() => {
      dispatch(loadFromStorage());
      dispatch(loadTimerFromStorage());
    }, [dispatch]);
    
    useEffect(() => {
      if(sections.length > 0) {
        localStorage.setItem("examState", JSON.stringify({
          stackId,
          sections,
          selectedQuestion,
          selectedSection,
          answers
        }));
      }
    }, [sections, selectedQuestion, selectedSection, answers ]);
    
    useEffect(() => {
      if(timeLeft <= 0) {
        submitExam();
        return;
      }
      
      const timer = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
      
      return () => clearInterval(timer);
    }, [timeLeft, dispatch]);
    
    useEffect(() => {
      const push = () => window.history.pushState({ _examGuard: true }, '', window.location.href);
      push();
      
      const onPop = (e) => {
        push();
        submitExam();
      };
      
      window.addEventListener('popstate', onPop);
      return () => window.removeEventListener('popstate', onPop);
    }, [stackId, answers]);
    
    if (!sections.length) {
      return <div>Loading...</div>;
    }
    
    const stacks = ["Frontend", "Backend", "Database"];
    const allQuestions = sections[selectedSection].questions;
    
    const handleChange = (selectedOption, correctOption) => {
      dispatch(setAnswer({
        selectedSection,
        selectedQuestion,
        selectedOption,
        correctOption
      }));
    }
    
    if(loading) {
      return <div>Authenticating User...</div>
    }

    if(!authorized) {
      return null;
    }

    const handlePrevious = () => {
      if(selectedQuestion !== 0) {
        dispatch(setSelectedQuestion(selectedQuestion - 1));
      }
      else {
        dispatch(setSelectedSection(selectedSection - 1));
        dispatch(setSelectedQuestion(sections[selectedSection - 1].questions.length - 1));
      }
    }

    const handleNext = () => {
      if(selectedSection === sections.length - 1 && selectedQuestion === sections[selectedSection].questions.length -1) {
        submitExam();
      }
      else if(selectedQuestion === sections[selectedSection].questions.length - 1) {
        dispatch(setSelectedSection(selectedSection + 1));
        dispatch(setSelectedQuestion(0));
      }
      else {
        dispatch(setSelectedQuestion(selectedQuestion + 1));
      }
    }

  return (
    <div className="wholeExamContainer">
      <div className="timerContainer">
        <img className="timerImg" src="https://img.freepik.com/free-vector/stopwatch-black-colour_78370-7249.jpg"/>
        <span>{Math.floor(timeLeft / 60)} : {(timeLeft % 60).toString().padStart(2, '0')}</span>
      </div>
      <div className="examMainContainer">
        <div className="questionContainer">
          <span className="question">{allQuestions[selectedQuestion].question}</span>
          <div className="selectOptionContainer">
            {allQuestions[selectedQuestion]?.options.map((option, idx) => (
              <label className="selectOptionLabel" key={idx}>
                <input
                  type="radio"
                  value={option}
                  checked={answers[selectedSection]?.[selectedQuestion]?.selectedOption === option}
                  onChange={() => handleChange(option, allQuestions[selectedQuestion].correctOption)}
                />{option}
              </label>
            ))}
          </div>
          {answers[selectedSection]?.[selectedQuestion]?.selectedOption !== '' && <span onClick={() => dispatch(clearAnswer({selectedSection, selectedQuestion}))} className="clearBtn">Clear Selection</span>}
          <div className="selectOptionBtn" style={answers[selectedSection]?.[selectedQuestion]?.selectedOption === '' ? {marginTop: "38px"} : {}}>
            <button className="Btns" onClick={() => handlePrevious()} disabled={selectedSection === 0 && selectedQuestion === 0}>Previous</button>
            <button className="Btns" onClick={() => handleNext()}>
              {
                selectedSection === sections.length - 1 &&
                selectedQuestion === sections[selectedSection].questions.length - 1 ? "Submit" : "Next"
              }
            </button>
          </div>
        </div>
        <div className="sectionContainer">
          {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                  <span style={{textDecoration:"underline"}}><b>{stacks[sectionIndex] + ": "}</b>{section.tech}</span>
                  <div className="questionBtn">
                      {section.questions.map((_, i) => (
                          <button
                            key={i}
                            className={`
                              selectQuestionBtn
                              ${answers[sectionIndex][i].selectedOption !== '' ? 'setSelectedColor' : ''}
                              ${i === selectedQuestion && sectionIndex === selectedSection ? 'setCurrentQuestion': ''}
                            `}
                            onClick={() => {
                              dispatch(setSelectedSection(sectionIndex))
                              dispatch(setSelectedQuestion(i));
                            }}
                          >{i + 1}</button>
                      ))}
                  </div>
              </div>
          ))}

          <hr />

          <div className="sectionCategoryContainer">
            <div className="sectionCategorySub">
              <div className="sectionCategory"></div><span>{": "}Not Answered</span>
            </div>
            <div className="sectionCategorySub">
              <div className="sectionCategory"></div><span>{": "}Answered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartExam
