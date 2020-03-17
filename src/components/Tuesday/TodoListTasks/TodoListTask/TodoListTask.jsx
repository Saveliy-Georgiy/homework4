import React from "react";
import styles from "./TodoListTask.module.css";

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    deleteThisTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    state = {
        editMode: false,
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
    };

    render = () => {

        const todoListTask = this.props.task.isDone === true ? styles.done : "";

        return (
            <div className={styles.todoListTask + " " + todoListTask}>
                <input
                    type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged}/>
                {this.state.editMode
                    ? <input
                        type="text"
                        value={this.props.task.title}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onTitleChanged}
                    />
                    :
                    <span className={styles.wordWrap}
                          onClick={this.activateEditMode}>
                        {this.props.task.id}-{this.props.task.title}-priority:
                    </span>
                }
                <button onClick={this.deleteThisTask}>X</button>
            </div>
        );
    };
}

export default TodoListTask;
