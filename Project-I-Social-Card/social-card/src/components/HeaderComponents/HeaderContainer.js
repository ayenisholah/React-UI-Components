import React from 'react';
import './Header.css';

function HeaderContainer (props) {
    return <div>{ props.text } >
        <p><strong>Lambda School Container</strong></p>
    </div>
}

function App() {
    return (
        <div className="header-container">
            <HeaderContainer text='test'/>
        </div>
    )
}

export default App;