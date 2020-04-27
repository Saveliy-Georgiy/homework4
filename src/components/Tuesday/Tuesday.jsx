import React from "react";
import styles from "./Tuesday.module.css";
import TodoListHeader from "./TodoListHeader/TodoListHeader";
import TodoListTasks from "./TodoListTasks/TodoListTasks";
import TodoListFooter from "./TodoListFooter/TodoListFooter";
import {restoreState,saveState} from '../../localStorage/localStorage';

class Tuesday extends React.Component {

    componentDidMount() {
       let state = restoreState("our-state", this.state);
        this.setState(state);
    }

    state = { //это объект, у него свойство tasks и filterValue
        tasks: [
            /*{id: 0, title: "CSS", isDone: true, priority: "low"},
            {id: 1, title: "JS", isDone: true, priority: "medium"},
            {id: 2, title: "ReactJS", isDone: false, priority: "high"},
            {id: 3, title: "Patterns", isDone: true, priority: "low"},*/
        ],
        filterValue: "All",
        nextTaskId: 0,
    };

    addTask = (newText) => {
        console.log("rfr");
        let newTask = {
            id: this.state.nextTaskId++,
            title: newText,
            isDone: false,
            priority: "high",
        };

        //let newTasks = this.state.tasks.push(newTask);
        let newTasks = [...this.state.tasks, newTask]; // spread оператор
        this.setState({
            tasks: newTasks
        }, () => {
            saveState("our-state", this.state);
        });

    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue,
        }, () => {
            saveState("our-state", this.state);
        });
    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, ...obj};
            } else {
                return t;
            }
        });

        this.setState({
            tasks: newTasks
        }, () => {
            saveState("our-state", this.state);
        });
    };

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    };

    changePriority = (taskId, selector) => {
        this.changeTask(taskId, {priority: selector});
    };

    deleteTask = (removedId) => {
        let newTasks = this.state.tasks.filter(t => t.id !== removedId);
        this.setState({
            tasks: newTasks
        }, () => {
            saveState("our-state", this.state);
        });
    };

    render = () => {

        return (
            <div>
                <div className={styles.todoList}>
                    <TodoListHeader
                        addTask={this.addTask}
                    />
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        changeTitle={this.changeTitle}
                        deleteTask={this.deleteTask}
                        changePriority={this.changePriority}
                        tasks={this.state.tasks.filter(t => {
                                switch (this.state.filterValue) {
                                    case "Active":
                                        return t.isDone === false;
                                    case "Completed":
                                        return t.isDone === true;
                                    case "All":
                                        return true;
                                    default:
                                        return true;
                                }
                            }
                        )}
                    />
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        );
    };
}

export default Tuesday;
