import React from "react";
import styles from "./InputVisitorName.module.css";

class InputVisitorName extends React.Component {

    switchInputStatus = () => {
        this.props.switchButtonState();
    };

    render = () => {
        return (
            <div>
                <input type="text" placeholder="Имя своё введи" className={styles.inputVisitorName}
                       ref={this.props.nameVisitorRef} onInput={this.switchInputStatus}
                />
            </div>
        );
    };
}

export default InputVisitorName;