import React from "react";
import styles from "./CounterVisitors.module.css";

class CounterVisitors extends React.Component {

    render = () => {
        return (
            <div className={styles.counterVisitors}>
                Количество посетителей: {this.props.counterVisitors}
            </div>
        );
    }
}

export default CounterVisitors;