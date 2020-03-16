import React from "react";
import styles from "./MyQuality.module.css";

class MyQuality extends React.Component {

    render = () => {

        return (
            <div className={styles.myQuality}>
                {this.props.quality.quality}
            </div>
        );
    };
}

export default MyQuality;