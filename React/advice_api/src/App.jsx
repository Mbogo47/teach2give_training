import { useState, useEffect } from "react";
import axios from "axios";
import { Hourglass } from "react-loader-spinner";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    setLoading(true);
    setError(null); 
    setAdvice(null);
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`);
      setAdvice(response.data.slip.advice);
    } catch (e) {
      setError("Failed to fetch advice. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <h2>Advice of the Day</h2>

      {loading ? (
        <div className="loader">
          <Hourglass  />
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="advice-box">
          <p className="advice">"{advice}"</p>
          <button onClick={fetchAdvice} className="btn">
            Get New Advice
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
