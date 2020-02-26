import React from "react";
import "./App.css";
import MyName from "./components/MyName/MyName";
import MyQualities from "./components/MyQualities/MyQualities";
import Visitors from "./components/Visitors/Visitors";

class App extends React.Component {

    state = {
        qualities: [
            {quality: "Капитан"},
            {quality: "Джек"},
            {quality: "Воробей"},
        ]
    };

    render = () => {
        return (
            <div className="App">
                <MyName/>
                <MyQualities qualities={this.state.qualities}/>
                <Visitors/>
            </div>
        );
    };
}

export default App;
