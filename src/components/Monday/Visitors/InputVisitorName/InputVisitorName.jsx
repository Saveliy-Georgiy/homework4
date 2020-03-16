import React from "react";
import styles from "./InputVisitorName.module.css";

class InputVisitorName extends React.Component {

    /*switchInputStatus = () => {
        this.props.switchButtonState();
    };*/

    render = () => {
        const inputClassname = this.props.error === true ? styles.inputVisitorName + " " + styles.error : styles.inputVisitorName;
        return (
            <div>
                <input type="text"
                       placeholder="Имя своё введи"
                       className={inputClassname}
                       value={this.props.title}
                    //onInput={this.switchInputStatus}
                       maxLength="25"
                       onKeyPress={this.props.onAddTaskKeyPress}
                       onChange={this.props.onTitleChanged}/>
            </div>
        );
    };
}

export default InputVisitorName;