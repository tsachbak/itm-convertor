import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import "./App.css";
import CoordinateConversionPage from "./CoordinateConversionPage";
import UploadFileFormPage from "./UploadFileFormPage";
import FindOnMapPage from "./FindOnMapPage";

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
          <Route path="/find-on-map" element={<FindOnMapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
