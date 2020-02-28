import React from "react";
import "./App.css";
import MyName from "./components/MyName/MyName";
import MyQualities from "./components/MyQualities/MyQualities";
import Visitors from "./components/Visitors/Visitors";


class App extends React.Component {

    render = () => {
        return (
            <div className="App">
                <div className="mainContainer">
                <MyName/>
                <MyQualities/>
                <Visitors/>
                </div>
            </div>
        );
    };
}

export default App;
