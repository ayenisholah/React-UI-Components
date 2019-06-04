import React from 'react';
import './Header.css';

function HeaderTitle () {
    return (
        <div className="title"> 
            <p className="lambda"><strong>Lambda School:</strong> </p>
            <p className="lambda handle">@LambdaSchool</p>
            <p className="lambda date">26 Jan</p>
        </div>
    )
}

export default HeaderTitle;