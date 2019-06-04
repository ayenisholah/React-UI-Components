import React from 'react';
import './Button.css';

function NumberButton (props) {
    return (
        <>
            <div className="row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                
            </div>
            <div className="row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <div className="row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className="row">
                <button>0</button>
            </div>
        </>
    )
}
export default NumberButton;
