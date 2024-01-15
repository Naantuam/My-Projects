import React from "react";
import Profile from "./component/profile.js";
import Chat from "./component/chat";
import Store from "./component/store"
import Settings from "./component/Settings"
import Google from "./component/google"
import Calender from "./component/calender"
import "./style.css";

function App(params) {
    return (
        <div className="wrap">
            <div className="container">
                <Profile />
                <Chat />
                <Calender />
                <Store />
                <Settings />
                <Google />
            </div>
        </div>
    )
};

export default App;