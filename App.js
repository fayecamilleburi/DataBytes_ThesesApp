import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-text">New Era University</div>
      </header>

      {/* Rectangle for Library Highlights */}
      <div className="library-highlights">Library Highlights</div>

      {/* Image below Library Highlights */}
      <img src="/library.jpg" alt="Library" className="library-image" />
      <div className="library-text"> 
        <div className="line1">Launch of</div>
        <div className="line2">BookMobile</div>
      </div>
      <img src="/library2.jpg" alt="Library2" className="library-image2" />
      <img src="/library3.jpg" alt="Library3" className="library-image3" />
      <img src="/library4.jpg" alt="Library4" className="library-image4" />
      <img src="/library5.jpg" alt="Library5" className="library-image5" />
      
      <div className="library-text2">
        <div className="line3"></div>Welcome to NEU Library!</div>
      
      <div className="library-text3">
        <div className="line4">Lorem ipsum dolor sit amet, consectetur </div>
        <div className="line5">Donec  convallis  dolor  dignissim tortor </div>
        <div className="line6">risus pellentesque.</div>
      </div>

      <div className="library-text4">
        <div className="line3"></div>Welcome to NEU Library!</div>
      
      <div className="library-text5">
        <div className="line4">Lorem ipsum dolor sit amet, consectetur </div>
        <div className="line5">Donec  convallis  dolor  dignissim tortor </div>
        <div className="line6">risus pellentesque.</div>
      </div>

      <div className="recent-activity">Recent Activity</div>
      <div className="recent-activity2"></div>
      <div className="recent-activity3"></div>
      
      
    </div>
  );
}

export default App;
