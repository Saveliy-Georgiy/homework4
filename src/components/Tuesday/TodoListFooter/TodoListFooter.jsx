import React from "react";
import styles from "./TodoListFooter.module.css";

class TodoListFooter extends React.Component {

    state = {
        isHidden: false,
    };

    onHideFiltersClick = () => {
        this.setState({
            isHidden: true
        });
    };

    onShowFiltersClick = () => {
        this.setState({
            isHidden: false
        });
    };

    render = () => {
        let classForAll = this.props.filterValue === "All" ? styles.filterActive : "";
        let classForCompleted = this.props.filterValue === "Completed" ? styles.filterActive : "";
        let classForActive = this.props.filterValue === "Active" ? styles.filterActive : "";
        return (
            <div className={styles.todoListFooter}>
                {!this.state.isHidden && <div>
                    <button className={classForAll}
                            onClick={() => {
                                this.props.changeFilter("All");
                            }}>
                        All
                    </button>
                    <button className={classForCompleted}
                            onClick={() => {
                                this.props.changeFilter("Completed");
                            }}>
                        Completed
                    </button>
                    <button className={classForActive}
                            onClick={() => {
                                this.props.changeFilter("Active");
                            }}>
                        Active
                    </button>
                </div>
                }
                {!this.state.isHidden && <span onClick={this.onHideFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowFiltersClick}>show</span>}
            </div>
        );
    };
}

export default TodoListFooter;
