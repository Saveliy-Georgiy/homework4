import React from "react";
import styles from "./MyQualities.module.css";
import MyQuality from "./MyQuality/MyQuality";

class MyQualities extends React.Component {

    render = () => {
        let qualities = this.props.qualities.map((quality, index) => {
            return <MyQuality quality={quality} key={index}/>;
        });
        return (
            <div className={styles.myQualities}>
                {qualities}
            </div>
        );
    };
}

export default MyQualities;