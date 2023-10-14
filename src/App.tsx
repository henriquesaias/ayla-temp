import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className='banners-container'>
      <div id="banner-logo" className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/pr1hyG3Q/BANNER-1-min.jpg)' }}>
        <img src="https://i.postimg.cc/jS8xTn0N/LOGO-BANNER-1.png" />
      </div>
      <div className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/3JV0TqXY/BANNER-2-min.jpg)' }}>
        <img src="https://i.postimg.cc/yYHYyzyJ/FRASE-BANNER-2.png" />
      </div>
      <div className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/s29M5Dtg/BANNER-3-min.jpg)' }}>
        <img src="https://i.postimg.cc/qvBJWXY4/FRASE-BANNER-3.png" />
      </div>
      <div className="home-banners" style={{ backgroundImage: 'url(https://i.postimg.cc/vmd1162K/BANNER-4-min.jpg)' }}>
        <img src="https://i.postimg.cc/SNfQZtgg/FRASE-BANNER-4.png" />
      </div>
    </div>
  );
}

export default App;
