import React from 'react';

const Shop = () => {

  let background = require('../images/background.jpg')
  const sectionStyle = {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'noRepeat',
      backgroundImage: 'url(' + background + ')'
  };

return(
  <div style={ sectionStyle }>
    <br /><br /><br /><br /><br /><br />
    <h1>Hello World</h1>
  </div>
 );
}

export default Shop;
