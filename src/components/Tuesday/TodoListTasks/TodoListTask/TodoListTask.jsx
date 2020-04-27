import React from "react";
import styles from "./TodoListTask.module.css";

class TodoListTask extends React.Component {

    state = {
        editMode: false,
    };

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked, this.props.task);
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value);
    };

    deleteThisTask = () => {
        this.props.deleteTask(this.props.task.id);
    };

    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
    };

    onPriorityChanged = (e) => {
        this.props.changePriority(this.props.task.id, e.currentTarget.value);
    };

    render = () => {

        const todoListTask = this.props.task.isDone === true ? styles.done : "";

        return (
            <div className={styles.todoListTask + " " + todoListTask}>
                <div className={styles.taskWrap}>
                    <input
                        type="checkbox"
                        checked={this.props.task.isDone}
                        onChange={this.onIsDoneChanged}
                    />
                    {this.state.editMode
                        ? <input
                            type="text"
                            value={this.props.task.title}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            onChange={this.onTitleChanged}
                        />
                        :
                        <div className={styles.wordWrap}
                             onClick={this.activateEditMode}>
                            {this.props.task.id}-{this.props.task.title}-priority:
                        </div>
                    }
                    <div>
                        <select
                            className={styles.selector}
                            value={this.props.task.priority}
                            onChange={this.onPriorityChanged}>
                            <option>high</option>
                            <option>medium</option>
                            <option>low</option>
                        </select>
                    </div>
                    <button
                        className={styles.deleteButton}
                        onMouseDown={this.deleteThisTask}>
                        X
                    </button>
                </div>
                <div>
                    <div>created:
                        {this.props.task.timeAdded}
                    </div>
                    <div>updated:
                        {this.props.task.timeUpdated}</div>
                    <div>finished:
                        {this.props.task.timeFinished}</div>
                </div>
            </div>
        );
    };
}

export default TodoListTask;
