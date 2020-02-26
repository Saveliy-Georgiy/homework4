import React from "react";
import styles from "./MyQualities.module.css";

class MyQualities extends React.Component {

    render = (props) => {
        let qualities = this.props.qualities.map((quality, index) => {
            //todo Return MyQuality component
        });
        return (
            <div className={styles.myQualities}>
                {qualities}
            </div>
        );
    };
}

export default MyQualities;