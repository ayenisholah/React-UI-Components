import React from 'react';
import './Header.css';

function HeaderTitle () {
    return (
        <div> 
            <h1>Lambda School</h1>
            <p>@LambdaSchool</p>
            <p>26 Jan</p>
        </div>
    )
}

function App() {
    return (
        <div className="header-title">
            <HeaderTitle text='test'/>
        </div>
    )
}

export default App;