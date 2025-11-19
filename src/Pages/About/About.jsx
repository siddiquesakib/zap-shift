import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");
  return (
    <div>
      <h1>About Us</h1>

      {/* 2. Tab Buttons */}
      <div className="tabs">
        <button
          onClick={() => setActiveTab("story")}
          className={activeTab === "story" ? "active" : ""}
        >
          Story
        </button>

        <button
          onClick={() => setActiveTab("mission")}
          className={activeTab === "mission" ? "active" : ""}
        >
          Mission
        </button>

        <button
          onClick={() => setActiveTab("success")}
          className={activeTab === "success" ? "active" : ""}
        >
          Success
        </button>

        <button
          onClick={() => setActiveTab("team")}
          className={activeTab === "team" ? "active" : ""}
        >
          Team & Others
        </button>
      </div>
    </div>
  );
};

export default About;
