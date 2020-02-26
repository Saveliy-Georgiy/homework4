import React from "react";
import styles from "./Visitors.module.css";
import CounterVisitors from "./CounterVisitors/CounterVisitors";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import AddVisitor from "./AddVisitor/AddVisitor";
import HelloVisitor from "./HelloVisitor/HelloVisitor";

class Visitors extends React.Component {

    render = () => {
        return (
            <div className={styles.visitors}>
                <CounterVisitors/>
                <InputVisitorName/>
                <AddVisitor/>
                <HelloVisitor/>
            </div>
        );
    }
}

export default Visitors;