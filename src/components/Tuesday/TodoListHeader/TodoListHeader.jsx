import React from "react";
import styles from "./TodoListHeader.module.css";

class TodoListHeader extends React.Component {

    //newTaskTitleRef = React.createRef();

    state = {
        isDisabled: true,
        error: false,
        title: "",
    };

    switchButtonStatus = () => {
        if (this.state.title === "") {
            this.setState(
                {
                    isDisabled: true,
                });
        } else {
            this.setState(
                {
                    isDisabled: false,
                });
        }
    };

    onAddTaskClick = () => {
        let newTitle = this.state.title;
        //let newText = this.newTaskTitleRef.current.value;
        this.state.title = "";
        //this.newTaskTitleRef.current.value = "";
        this.props.addTask(newTitle);
        this.setState(
            {
                isDisabled: true,
                error: false,
                title: "",
            }
        );
    };

    handleChangeInput = () => {
        if (this.state.title === "") {
            this.setState(
                {
                    error: true,
                    //title: this.state.title,
                }
            );
        } else {
            this.setState(
                {
                    error: false
                }
            );
        }
    };

    onTitleChanged = (e) => {
        this.setState(
            {
                title: e.currentTarget.value,
            }, this.switchButtonStatus);

    };

    onAddTaskKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick();
        }
    };

    render = () => {
        // const {error} = this.state;
        const inputClassname = this.state.error ? styles.error : "";
        return (
            <div className={styles.TodoListHeader}>
                <h3 className={styles.todoListHeaderTitle}>What to Learn</h3>
                <div className={styles.todoListNewTaskForm}>
                    <div>
                        <input
                            //ref={this.newTaskTitleRef}
                            type="text"
                            placeholder="New task name"
                            // onInput={}
                            className={inputClassname}
                            onChange={this.onTitleChanged}
                            onKeyPress={this.onAddTaskKeyPress}
                            value={this.state.title}
                        />
                    </div>
                    <button
                        onClick={this.onAddTaskClick}
                        disabled={this.state.isDisabled}>
                        Add
                    </button>
                </div>
            </div>
        );
    };
}

export default TodoListHeader;
