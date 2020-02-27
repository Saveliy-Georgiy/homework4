import React from "react";
import styles from "./HelloVisitor.module.css";

class HelloVisitor extends React.Component {

    render = () => {
        if (this.props.nameVisitor) {
            return (
                <div className={styles.helloVisitor}>
                    Hello {this.props.nameVisitor}!
                </div>
            );
        }
        return false;
    };
}

export default HelloVisitor;