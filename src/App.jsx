import React from "react";
import styles from "./App.module.css";
import MyName from "./components/MyName/MyName";
import MyQualities from "./components/MyQualities/MyQualities";
import Visitors from "./components/Visitors/Visitors";


class App extends React.Component {

    render = () => {
        return (
            <div className={styles.App}>
                <meta name="viewport" content="width=device-width; initial-scale=0.85; maximum-scale=0.85; user-scalable=0;" />
                <div className={styles.mainContainer}>
                <MyName/>
                <MyQualities/>
                <Visitors/>
                </div>
            </div>
        );
    };
}

export default App;
