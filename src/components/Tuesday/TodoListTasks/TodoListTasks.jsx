import React from "react";
import styles from "./TodoListTasks.module.css";
import TodoListTask from "./TodoListTask/TodoListTask";

class TodoListTasks extends React.Component{
    render = () => {
        let tasksElements = this.props.tasks.map((task, index)=>{
            return (
                <TodoListTask
                    key={index}
                    task={task}
                    /*title={item.title}
                    isDone={item.isDone}
                    priority={item.priority}*/
                    changeTitle={this.props.changeTitle}
                    changeStatus={this.props.changeStatus}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
        return (
            <div className={styles.todoListTask}>
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;