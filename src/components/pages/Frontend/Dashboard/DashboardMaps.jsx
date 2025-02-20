import React from "react";

const DashboardMaps = () => {
  return (
    <div>
        <h2 className="text-xl font-semibold mb-4">Map</h2>
      <div className="p-4  bg-white rounded shadow">
        <div></div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.752332790929!2d121.41904031017131!3d13.928613593119923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd474ee827e219%3A0x39f97b6ccd45f039!2sKirm&#39;z%20B%20Hub!5e1!3m2!1sen!2sph!4v1739364484166!5m2!1sen!2sph"
            width="1150"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      
    </div>
  );
};

export default DashboardMaps;
