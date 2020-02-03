import React from 'react';
import './styles.css';

const userOutput = (props) => {
    const style = {
        border: '1px solid red',
        padding: '10px',
        width: '50%',
        margin: '10px auto'
    }
    return (
        <div className="user-output" style={style}>
            <p>Hi! My name is {props.userName}!</p>
            <h3>Write your name!</h3>
        </div>
    )
}

export default userOutput;