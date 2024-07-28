import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import Gallery from './Gallery';
import Weather from './Weather';
import Webcameras from './Webcameras';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center py-5 text-white top_heading'>Thailand Trip</h1>
      <div className='menu_links flex justify-around py-5 align-center'>
        {/* <a className = 'text-blue-600 bold text-2xl' href="#gallery">Gallery</a> */}
        <a className = 'text-blue-600 bold text-2xl' href="#cameras">Web cameras</a>
     </div> 
      <div className="top_container md:flex flex-row">
        <div className="counter_container md:basis-1/3"> <Counter /> </div>
        <div className="weather_container md:basis-2/3">
          <Weather />
        </div>
      </div>
      <div className="bottom_container">
        <div className="gallery_container" id="gallery"> <Gallery /> </div>
      </div>

      <div className='cameras_container' id="cameras">
       <Webcameras />
      </div>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
