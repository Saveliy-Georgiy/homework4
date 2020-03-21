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
      /*  visitor: {/!*title:"", timeAdded: ""*!/},*/
        error: false,
        title:"",
    };

    zeroFirstFormat = (value) => {
        if (value < 10) {
            value = "0" + value;
        }
        return value;
    };

    time = () => {
        let date = new Date();
        return `${this.zeroFirstFormat(date.getHours())}:${this.zeroFirstFormat(date.getMinutes())}`
    };

    changeVisitorsState = () => {
        let newVisitor = this.state.visitor;
        if (newVisitor.title !== "") {
            this.setState({
                visitors: [...this.state.visitors, newVisitor.title],
                visitor: {title: "", timeAdded: this.time},
            });
        }
    };

    /*switchButtonState = () => {
        this.setState({
            isDisable: this.state.visitor.title === ""
        });
    };*/

    /* changeDisableState = () => {
         this.setState({
             isDisable: true
         });
     };*/

    //вместо switchButtonState и changeDisableState - errorHighlighting

    errorHighlighting = () => {
        if (this.state.visitor.title === "") {
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
                //visitor: {title: e.currentTarget.value, timeAdded: this.state.timeAdded}
                title: e.currentTarget.value,
            });
    };

    onAddTaskKeyPress = (e) => {
        if (e.key === "Enter") {
            //this.changeDisableState();
           /* this.changeVisitorsState();
            this.errorHighlighting();*/
            this.setState(
                {
                    //visitor: {title: e.currentTarget.value, timeAdded: this.state.timeAdded}
                    title: e.currentTarget.value,
                });
        }
    };

    addVisitor = () => {
        //this.changeDisableState();
        /*this.changeVisitorsState();
        this.errorHighlighting();*/
        let newVisitor = {title:this.state.title, timeAdded: this.time()};
        debugger;
        this.setState(
            {
                //visitor: {title: e.currentTarget.value, timeAdded: this.state.timeAdded}
           visitors: [...this.state.visitors, newVisitor],
                title: "",
            });
    };

    render = () => {
        return (
            <div className={styles.visitors}>
                <div className={styles.addVisitor}>
                    <InputVisitorName
                        title={this.state.title}
                        //switchButtonState={this.switchButtonState}
                        onAddTaskKeyPress={this.onAddTaskKeyPress}
                        error={this.state.error}
                        onTitleChanged={this.onTitleChanged}/>
                    <AddVisitor
                        nameVisitorRef={this.state.title}
                        addVisitor={this.addVisitor}
                        nameVisitor={this.state.visitors[this.state.visitors.length - 1] ?
                            this.state.visitors[this.state.visitors.length - 1] : ""}
                    />
                </div>
                <HelloVisitor
                    timeAdded={this.state.visitors[this.state.visitors.length - 1] ? this.state.visitors[this.state.visitors.length - 1].timeAdded: ""}
                    nameVisitor={this.state.visitors[this.state.visitors.length - 1] ? this.state.visitors[this.state.visitors.length - 1].title: ""}/>
                <AllVisitors visitors={this.state.visitors}/>
            </div>
        );
    };
}

export default Visitors;