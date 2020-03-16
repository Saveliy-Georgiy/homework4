import React from "react";
import styles from "./Monday.module.css";
import MyQualities from "./MyQualities/MyQualities";
import Visitors from './Visitors/Visitors';
import MyName from "./MyName/MyName";

class Monday extends React.Component {

    render = () => {
        return (
            <div className={styles.mainContainer}>
                <MyName/>
                <MyQualities/>
                <Visitors/>
            </div>
        );
    };
}

export default Monday;
