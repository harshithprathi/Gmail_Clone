import React, { useState } from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import '../css/emaillist.css';

function Emailtype() {
  const [activeOption, setActiveOption] = useState('Primary');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  return (
    <div className='emailtype'>
        <div className={`emailtype__options ${activeOption === 'Primary' ? 'emailtype__options--active' : ''}`}
        onClick={() => handleOptionClick('Primary')}>
            <InboxIcon />
            <p>Primary</p>
        </div>
        <div className={`emailtype__options ${activeOption === 'Social' ? 'emailtype__options--active' : ''}`}
        onClick={() => handleOptionClick('Social')}>
            <PeopleIcon />
            <p>Social</p>
        </div>
        <div className={`emailtype__options ${activeOption === 'Promotions' ? 'emailtype__options--active' : ''}`}
        onClick={() => handleOptionClick('Promotions')}>
            <LocalOfferIcon />
            <p>Promotions</p>
        </div>
    </div>
  )
}

export default Emailtype