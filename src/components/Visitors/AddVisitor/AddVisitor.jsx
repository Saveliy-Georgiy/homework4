import React from "react";
import styles from "./AddVisitor.module.css";

class AddVisitor extends React.Component {

    render = () => {
        return (
            <div>
                <button className={styles.addVisitor}
                        onClick={this.props.addVisitor}
                        disabled={this.props.isDisable}>
                    WAP
                </button>
            </div>
        );
    };
}

export default AddVisitor;