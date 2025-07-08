import { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../Home/Home.css";
import "./StudyInterface.css";

const StudyTracker = () => {

    const [showAchievements, setShowAchievements] = useState(false);

    const toggleAchievements = () => {
        setShowAchievements((prev) => !prev);
    };
    
    return (

        <div className="tracker-page-container">
            <Navbar />

            <div className="dashboard">
                <div className ="sidebar">
                    <div class="header">To-Do List</div>
                </div>

                <div className="middle-column">
                    <div className="image-container">
                        {/* You can insert an image later here */}
                    </div>
                    <div className="achievements-bar" onClick={toggleAchievements}>
                        Achievements + Statistics
                    </div>
                    {showAchievements && (
                        <div className="achievements-content">
                        {/* Replace this with actual content */}
                        <p>⭐ You completed 3 Pomodoros today!</p>
                        <p>📈 Your focus time increased by 12%</p>
                        </div>
                    )}
                </div>    

                <div className="widgets">

                <div class="widget calendar-widget">
                    <div class="header">Calendar</div>
                </div>

                <div class="widget pomodoro-widget">
                    <div class="header">Pomodoro</div>
                </div>
                
                
            </div>
            </div>

            <div class="main">
            </div>


            <Footer />

        </div>
    );
};

export default StudyTracker;