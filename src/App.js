import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.css";
import CoordinateConversionPage from "./CoordinateConversionPage";
import UploadFileFormPage from "./UploadFileFormPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={MainPage} />
          <Route
            path="/single-cord-convert"
            element={<CoordinateConversionPage />}
          />
          <Route path="/upload" element={<UploadFileFormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
