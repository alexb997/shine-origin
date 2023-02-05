import { useState, useEffect } from "react";
import "./App.css";
import AppRouter from "./components/routing/AppRouter";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div class="loader-wrapper">
          <div className="main-content">
            <AppRouter />;
          </div>
        </div>
      )}
    </>
  );
  // return <AppRouter />;
}

export default App;
