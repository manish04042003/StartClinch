import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Loding from "./components/Loding";

const App = () => {
    return (<>
            <Header/>
            <Loding/>
        
    </>)
} ;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(App())