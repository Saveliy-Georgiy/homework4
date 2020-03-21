import React from "react";
import styles from "./HelloVisitor.module.css";
import avatar1 from './avatar1.jpg'
class HelloVisitor extends React.Component {

    render = () => {
        if (this.props.nameVisitor) {
            return (
                <div className={styles.message}>
                    <img src={avatar1} alt="avatar"/>
                <div className={styles.commentBubble}>
                    <div className={styles.userName}>Saveliy</div>
                    <div className={styles.helloVisitor}>
                        Hello {this.props.nameVisitor}!
                    </div>
                    <div className={styles.time}>{this.props.timeAdded}</div>
                </div>
                </div>
            );
        }
        return false;
    };
}

export default HelloVisitor;