import React from "react";
import styles from "./AddVisitor.module.css";
import HelloVisitor from "./HelloVisitor/HelloVisitor";

class AddVisitor extends React.Component {

    state = {
        nameVisitor: "",
    };

    addVisitor = () => {
        let newNameVisitor = this.props.nameVisitorRef.current.value;
        this.props.nameVisitorRef.current.value = "";
        this.props.changeDisableState();
        this.setState({
            nameVisitor: newNameVisitor
        });
    };

    render = () => {
        return (
            <div>
                <button className={styles.addVisitor} onClick={this.addVisitor} disabled={this.props.isDisable}>
                    WAP
                </button>
                <HelloVisitor nameVisitor={this.state.nameVisitor}/>
            </div>
        );
    };
}

export default AddVisitor;