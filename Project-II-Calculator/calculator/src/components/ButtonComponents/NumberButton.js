import React from 'react';
import './Button.css';

function NumberButton (props) {
    return (
        <>
            <div className="row">
                <button className={props.buttonStyle}>7{props.text}</button>
                <button>8</button>
                <button>9</button>
                <button>X</button>
                
            </div>
            <div className="row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>
            <div className="row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>
            <div className="row">
                <button>0</button>
                <button>=</button>
            </div>
        </>
    )
}
export default NumberButton;
