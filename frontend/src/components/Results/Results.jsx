import React, { useEffect, useState } from "react";
import "./Results.css";
import axios from 'axios'

function Results() {
  const [isActive, setIsActive] = useState("stack1");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const getDetails = async() => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getdetails`, {
          email,
          isActive
        });
        setData(response.data);
        setCurrentPage(1);
      }
      catch(err) {
        console.log("Internal server error...");
      }
      finally {
        setLoading(false);
      }
    }

    getDetails();
  }, [isActive]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="results-container">
      <div className="stack-buttons">
        <button
          className={isActive === "stack1" ? "active" : ""}
          onClick={() => setIsActive("stack1")}
        >
          Stack 1
        </button>
        <button
          className={isActive === "stack2" ? "active" : ""}
          onClick={() => setIsActive("stack2")}
        >
          Stack 2
        </button>
      </div>

      {loading ? <div className="results-table"><p>Loading...</p></div> : (
        data.length === 0 ? <div className="results-table"><h1>No Data Found</h1></div> : (
          <>
            <div className="results-table">
              <div className="results-header">
                <span>Attempt</span>
                <span>Total Score</span>
                <span>Your Score</span>
              </div>
              {currentItems.map((row, index) => (
                <div className="results-row" key={index}>
                  <span>{row.attempt}</span>
                  <span>{row.totalScore}</span>
                  <span>{row.yourScore}</span>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>

              <span style={{color: "white"}}>Page {currentPage} of {totalPages}</span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Results;