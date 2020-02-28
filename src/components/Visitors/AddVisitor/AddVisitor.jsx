import React from "react";
import styles from "./AddVisitor.module.css";

class AddVisitor extends React.Component {

    addVisitor = () => {
        this.props.changeDisableState();
        this.props.changeVisitorsState();
    };

    render = () => {
        return (
            <div>
                <button className={styles.addVisitor} onClick={this.addVisitor} disabled={this.props.isDisable}>
                    WAP
                </button>
            </div>
        );
    };
}

export default AddVisitor;