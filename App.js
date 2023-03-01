import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Singers from "./components/Singers";
import UperFooter from "./components/UperFooter";

const App = () => {
    return (<>
            <Header/>
            <Singers/>
            <UperFooter/>
            <Footer/>
    </>)
} ;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App())