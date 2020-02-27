import React from "react";
import styles from "./DisplayVisitors.module.css";
import DisplayVisitor from "./DisplayVisitor/DisplayVisitor";

class DisplayVisitors extends React.Component {

    render = () => {
        let visitorsList = this.props.visitors.map((visitor, index) => {
            return (
                <DisplayVisitor visitor={visitor} key={index}/>
            );
        });
        return (
            <div className={styles.displayVisitors}>
                {this.props.visitors.length ? "Посетители:": "Посетители: нету"} {visitorsList}
            </div>
        );
    };
}

export default DisplayVisitors;