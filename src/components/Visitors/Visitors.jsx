import React from "react";
import styles from "./Visitors.module.css";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import AddVisitor from "./AddVisitor/AddVisitor";
import AllVisitors from "./AllVisitors/AllVisitors";
import HelloVisitor from "./HelloVisitor/HelloVisitor";

class Visitors extends React.Component {

    nameVisitorRef = React.createRef();

    state = {
        isDisable: true,
        visitors: [],
    };

    changeVisitorsState = () => {
        let newNameVisitor = this.nameVisitorRef.current.value;
        this.nameVisitorRef.current.value = "";
        this.setState({
            visitors: [...this.state.visitors, newNameVisitor]
        });
    };

    switchButtonState = () => {
        this.setState({
            isDisable: this.nameVisitorRef.current.value === ""
        });
    };

    changeDisableState = () => {
        this.setState({
            isDisable: true
        });
    };

    render = () => {
        return (
            <div className={styles.visitors}>
                <div className={styles.addVisitor}>
                    <InputVisitorName nameVisitorRef={this.nameVisitorRef} isDisable={this.state.isDisable}
                                      switchButtonState={this.switchButtonState}/>
                    <AddVisitor nameVisitorRef={this.nameVisitorRef} isDisable={this.state.isDisable}
                                switchButtonState={this.switchButtonState} changeDisableState={this.changeDisableState}
                                nameVisitor={this.state.visitors[this.state.visitors.length - 1] ? this.state.visitors[this.state.visitors.length - 1] : ""}
                                changeVisitorsState={this.changeVisitorsState}/>
                </div>
                <HelloVisitor
                    nameVisitor={this.state.visitors[this.state.visitors.length - 1] ? this.state.visitors[this.state.visitors.length - 1] : ""}/>
                <AllVisitors visitors={this.state.visitors}/>
            </div>
        );
    };
}

export default Visitors;