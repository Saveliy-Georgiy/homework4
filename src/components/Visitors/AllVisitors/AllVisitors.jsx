import React from "react";
import styles from "./AllVisitors.module.css";
import CounterVisitors from "./CounterVisitors/CounterVisitors";
import DisplayVisitors from "./DisplayVisitors/DisplayVisitors";

class AllVisitors extends React.Component {

    render = () => {
        return (
            <div className={styles.allVisitors}>
                <CounterVisitors counterVisitors={this.props.visitors.length}/>
                <DisplayVisitors visitors={this.props.visitors}/>
            </div>
        );
    };
}

export default AllVisitors;