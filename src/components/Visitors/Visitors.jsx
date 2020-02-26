import React from "react";
import styles from "./Visitors.module.css";
import CounterVisitors from "./CounterVisitors/CounterVisitors";
import InputVisitorName from "./InputVisitorName/InputVisitorName";

class Visitors extends React.Component {

    render = () => {
        return (
            <div className={styles.visitors}>
                //todo Add 2 components: AddVisitor, HelloVisitor.
                <CounterVisitors/>
                <InputVisitorName/>
            </div>
        );
    }
}

export default Visitors;