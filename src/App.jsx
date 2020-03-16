import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Monday/Navbar/Navbar";
import Monday from "./components/Monday/Monday";
import {HashRouter, Route} from "react-router-dom";
import Tuesday from "./components/Tuesday/Tuesday";


class App extends React.Component {

    state = {
        dayOfWeek: [
            {title: "monday", link:"/monday", style: "styles.activeLink"},
            {title: "tuesday", link:"/tuesday", style: "styles.activeLink"},
        ],
    };

    render = () => {
        return (
            <HashRouter>
                <div className={styles.App}>
                    <Navbar dayOfWeek={this.state.dayOfWeek}/>
                    <Route path="/monday"
                           render={() => <Monday/>}/>
                    <Route path="/tuesday"
                           render={() => <Tuesday/>}/>
                </div>
            </HashRouter>);
    };
}

export default App;
