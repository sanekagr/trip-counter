import React from "react";

const Webcameras = () => {
  return (
    <div className="web_cameras">
      <h1 className="text-4xl font-bold text-center pt-7 text-blue-800">
        Web Cameras
      </h1>

      <div className="cameras_frames md:flex justify-between p-4 align-center">
        <div className="frame flex-1 p-2 h-96">
        <iframe
            className="w-full h-full"
            title="El Gaucho | Sukhumvit Road | Bangkok"
            src="https://www.youtube.com/embed/TfOOzM6mPT4?si=UGYpSgrmVtzVcZG&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="frame md:flex-1  p-2 h-96">
          <iframe
            className="w-full h-full"
            title="Secret Garden | Big Buddha Beach | Koh Samui | Thailand"
            src="https://www.youtube.com/embed/P_zJwpM2g68?si=SrO7AwHonZD6aZyX&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="frame md:flex-1  p-2  h-96 ">
          <iframe
            className="w-full h-full"
            title="Ultra Bodies Gym | Opp. 7-Eleven | Lamai | Koh Samui "
            src="https://www.youtube.com/embed/28bbCSlDhGo?si=UAVpBA5JJCzOIvan&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {/*  width="560" height="315"  */}
      </div>

      <div className="cameras_frames md:flex justify-between p-4 align-center">
        <div className="frame md:flex-1 p-2 h-96">
          <iframe
            className="w-full h-full"
            title="Ultra Bodies Gym | Opp. 7-Eleven | Lamai | Koh Samui "
            src="https://www.youtube.com/embed/Fw9hgttWzIg?si=qy_KgAqBSvWoQem7&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="frame md:flex-1  p-2 h-96">
          <iframe
            className="w-full h-full"
            title="Famous The Best Pancake Man | Chaweng | Koh Samui"
            src="https://www.youtube.com/embed/e9T0L_POAOk?si=kj3NhPLvn_HxQT0m&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="frame md:flex-1  p-2  h-96 ">
        <iframe
            className="w-full h-full"
            title="The Door beach club | Lamai | Koh Samui"
            src="https://www.youtube.com/embed/seaFk0SVm5s?autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="cameras_frames md:flex justify-between p-4 align-center">
        <div className="frame md:flex-1 p-2 h-96">
          <iframe
            className="w-full h-full"
            title="Royal Muang Samui Villas (cam2) Choeng Mon beach | Koh Samui "
            src="https://www.youtube.com/embed/mbZbe45vNV4?si=RdjAphxdpyr1oneT&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="frame md:flex-1  p-2 h-96">
          <iframe
            className="w-full h-full"
            title="Annie Sweetery and Eatery cafe Fisherman's village"
            src="https://www.youtube.com/embed/lcEXAOqSg2E?si=5XhpU_Y-sIopGdyp&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="frame md:flex-1  p-2  h-96 ">
          <iframe
            className="w-full h-full"
            title="The Sunset bar and restaurant Bang Rak beach | Koh Samui"
            src="https://www.youtube.com/embed/nGxwG0SG4L4?si=MP-07wG4HvVLFr8x&autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Webcameras;
