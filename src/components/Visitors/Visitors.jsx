import React from "react";
import styles from "./Visitors.module.css";
import CounterVisitors from "./CounterVisitors/CounterVisitors";
import InputVisitorName from "./InputVisitorName/InputVisitorName";
import AddVisitor from "./AddVisitor/AddVisitor";

class Visitors extends React.Component {

    nameVisitorRef = React.createRef();

    state = {
        isDisable: true,
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
                <CounterVisitors/>
                <InputVisitorName nameVisitorRef={this.nameVisitorRef} isDisable={this.state.isDisable}
                                  switchButtonState={this.switchButtonState}/>
                <AddVisitor nameVisitorRef={this.nameVisitorRef} isDisable={this.state.isDisable}
                            switchButtonState={this.switchButtonState} changeDisableState={this.changeDisableState}/>
            </div>
        );
    };
}

export default Visitors;