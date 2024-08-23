import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import Main from "./pages/Main/Main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Main/>
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
