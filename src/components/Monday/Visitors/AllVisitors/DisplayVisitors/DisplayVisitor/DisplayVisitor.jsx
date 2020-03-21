import React from "react";
import styles from "./DisplayVisitor.module.css";

class DisplayVisitor extends React.Component {

    render = () => {
        return (
            <div className={styles.displayVisitor}>
                {this.props.visitor.title}
            </div>
        );
    };
}

export default DisplayVisitor;