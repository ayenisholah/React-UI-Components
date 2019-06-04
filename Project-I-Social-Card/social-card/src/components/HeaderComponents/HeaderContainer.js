import React from 'react';
import './Header.css';

import ImageThumbnail from '../HeaderComponents/ImageThumbnail';
import HeaderTitle from '../HeaderComponents/HeaderTitle';
import HeaderContent from '../HeaderComponents/HeaderContent';

function HeaderContainer () {
    return <div> 
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
    </div>
}

export default HeaderContainer;