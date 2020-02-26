import React from "react";
import styles from "./Visitors.module.css";
import CounterVisitors from "./CounterVisitors/CounterVisitors";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import AddVisitor from "./AddVisitor/AddVisitor";

class Visitors extends React.Component {

    render = () => {
        return (
            <div className={styles.visitors}>
                //todo Add component HelloVisitor.
                <CounterVisitors/>
                <InputVisitorName/>
                <AddVisitor/>
            </div>
        );
    }
}

export default Visitors;