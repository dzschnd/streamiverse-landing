import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Features from "./Features/Features";
import Widgets from "./Widgets/Widgets";
import Wallet from "./Wallet/Wallet";
import MonetizationTools from "./MonetizationTools/MonetizationTools";
import React, {useState} from "react";
import WaitlistWidget from "../../components/Header/WaitlistWidget";

function FeaturesPage() {
    return (
        <div className={'background-neutral-900'}>
            <Header/>
            <Features/>
            <Widgets/>
            <Wallet/>
            <MonetizationTools/>
            <Footer/>
        </div>
    )
}

export default FeaturesPage;
