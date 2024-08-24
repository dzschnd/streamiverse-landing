import Labs from "./Labs/Labs";
import Mission from "./Mission/Mission";
import Resources from "./Resources/Resources";
import Contact from "./Contact/Contact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function LabsPage() {
    return (
        <div className={'background-neutral-900'}>
            <Header/>
            <Labs/>
            <Mission/>
            <Resources/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LabsPage;
