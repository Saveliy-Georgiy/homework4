import React from "react";
import styles from "./Visitors.module.css";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import AddVisitor from "./AddVisitor/AddVisitor";
import AllVisitors from "./AllVisitors/AllVisitors";
import HelloVisitor from "./HelloVisitor/HelloVisitor";

class Visitors extends React.Component {

    state = {
        isDisable: true,
        visitors: [],
        error: false,
        title: "",
    };

    changeVisitorsState = () => {
        let newNameVisitor = this.state.title;
        if(newNameVisitor!=="") {
        this.setState({
            visitors: [...this.state.visitors, newNameVisitor],
            title: "",
        });
        }
    };

    /*switchButtonState = () => {
        this.setState({
            isDisable: this.state.title === ""
        });
    };*/

    /* changeDisableState = () => {
         this.setState({
             isDisable: true
         });
     };*/

    //вместо switchButtonState и changeDisableState - errorHighlighting

    errorHighlighting = () => {
        if (this.state.title === "") {
            this.setState({
                error: true
            });
        } else {
            this.setState({
                error: false
            });
        }
    };

    onTitleChanged = (e) => {
        this.setState(
            {
                title: e.currentTarget.value,
            });
    };

    onAddTaskKeyPress = (e) => {
        if (e.key === "Enter") {
            //this.changeDisableState();
            this.changeVisitorsState();
            this.errorHighlighting();
        }
    };

    addVisitor = () => {
        //this.changeDisableState();
        this.changeVisitorsState();
        this.errorHighlighting();
    };

    render = () => {
        return (
            <div className={styles.visitors}>
                <div className={styles.addVisitor}>
                    <InputVisitorName title={this.state.title}
                                      //switchButtonState={this.switchButtonState}
                                      onAddTaskKeyPress={this.onAddTaskKeyPress}
                                      error={this.state.error}
                                      onTitleChanged={this.onTitleChanged}/>
                    <AddVisitor nameVisitorRef={this.state.title}
                                addVisitor={this.addVisitor}
                                nameVisitor={this.state.visitors[this.state.visitors.length - 1] ?
                                    this.state.visitors[this.state.visitors.length - 1] : ""}
                                />
                </div>
                <HelloVisitor
                    nameVisitor={this.state.visitors[this.state.visitors.length - 1] ? this.state.visitors[this.state.visitors.length - 1] : ""}/>
                <AllVisitors visitors={this.state.visitors}/>
            </div>
        );
    };
}

export default Visitors;