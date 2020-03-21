import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Monday/Navbar/Navbar";
import Monday from "./components/Monday/Monday";
import {HashRouter, Route} from "react-router-dom";
import Tuesday from "./components/Tuesday/Tuesday";
import {restoreState} from "./localStorage/localStorage";
import Loading from "./components/Loading/Loading";


class App extends React.Component {

    componentDidMount() {
        setTimeout(this.setTime, 3000);
        let state = restoreState("App-state", this.state);
        this.setState(state);
    }

    state = {
        dayOfWeek: [
            {title: "monday", link: "/monday", style: "styles.activeLink"},
            {title: "tuesday", link: "/tuesday", style: "styles.activeLink"},
        ],
        loading: true,
    };

    setTime = () => {
        this.setState({
            loading: false
        });
    };

    render = () => {
        if (this.state.loading) {
        return (
            <div className={styles.App}>
            <Loading/>
            </div>
            );
        } else {
       return (
           <HashRouter>
               <div className={styles.App}>
                   <Navbar dayOfWeek={this.state.dayOfWeek}/>
                   <Route path="/monday"
                          render={() => <Monday/>}/>
                   <Route path="/tuesday"
                          render={() =>
                              <Tuesday loading={this.state.loading}/>}/>
               </div>
           </HashRouter>)
       }
    };
}

export default App;
