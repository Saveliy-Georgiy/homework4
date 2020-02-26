import React from 'react';
import styles from './MyName.module.css'

class MyName extends React.Component {

    render = () => {
        return (
            <div className={styles.myName}>Бирюков Савелий-Георгий Юрьевич</div>
        );
    }
}

export default MyName;