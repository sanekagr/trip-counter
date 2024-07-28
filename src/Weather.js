import React from "react";

const Weather = () => {
  return (
    //weather links
    //https://weatherwidget.io/

    <div className="weather_info">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/13d76100d50/bangkok/"
        data-label_1="BANGKOK"
        data-label_2="WEATHER"
        data-icons="Climacons Animated"
        data-days="3"
        data-theme="original"
      >
        BANGKOK
      </a>

      <a
        class="weatherwidget-io"
        href="https://forecast7.com/en/10d1099d83/ko-tao/"
        data-label_1="KO TAO"
        data-label_2="WEATHER"
        data-icons="Climacons Animated"
        data-days="3"
        data-theme="original"
      >
        KO TAO WEATHER
      </a>

      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/9d52100d05/ko-samui/"
        data-label_1="SAMUI"
        data-label_2="WEATHER"
        data-icons="Climacons Animated"
        data-days="3"
        data-theme="original"
      >
        SAMUI
      </a>
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/18d7998d99/chiang-mai/"
        data-label_1="CHIANG MAI"
        data-label_2="WEATHER"
        data-icons="Climacons Animated"
        data-days="3"
        data-theme="original"
      >
        CHIANG MAI
      </a>
    </div>
    /*  <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a> */
  );
};

export default Weather;
