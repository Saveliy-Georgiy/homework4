import React from "react";
import styles from "./Visitors.module.css";
import CounterVisitors from "./CounterVisitors/CounterVisitors";

class Visitors extends React.Component {

    render = () => {
        return (
            <div className={styles.visitors}>
                //todo Add 3 components: InputVisitorName, AddVisitor, HelloVisitor.
                <CounterVisitors/>
            </div>
        );
    }
}

export default Visitors;