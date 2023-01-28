import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "../../pages/FormPage";
import HomePage from "../../pages/HomePage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
