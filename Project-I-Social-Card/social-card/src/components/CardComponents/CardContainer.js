import React from 'react';
import './Card.css';
import './CardBanner.js'
import './CardContent.js'
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

function CardContainer () {
    return <div>
        <CardBanner />
        <CardContent />
    </div>
}

export default CardContainer;