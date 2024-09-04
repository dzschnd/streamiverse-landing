import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import HomePage from "./pages/Home/HomePage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import LabsPage from "./pages/LabsPage/LabsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <HomePage/>
                }/>
                <Route path="/features" element={
                    <FeaturesPage/>
                }/>
                <Route path="/labs" element={
                    <LabsPage/>
                }/>
                <Route path="/privacy-policy" element={
                    <PrivacyPolicy/>
                }/>
                <Route path="/terms-of-use" element={
                    <TermsOfUse/>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
