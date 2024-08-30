import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 


function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLogout = () => {
    navigate("/"); 
  };
  
  const handleBackToHomePage = () => {
    navigate("/home"); 
  };

  const handleRegisterStudents = () => {
    navigate("/register-students"); 
  };

  const handleStudentList = () => {
    navigate("/student-list"); 
  };
  const handleSetting = () => {
    navigate("/setting"); 
  };

  return (
    <div className="aside">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="profile-container">
          <img src={profile} alt="Profile" className="profile-img" />
          <div className="profile-info">
            <h1>Lamzy</h1>
            <p>Web Development</p>
          </div>
        </div>
        <img src={Logo} alt="Logo" className="sidebar-logo" />
        <nav className="sidebar-nav">
          <p onClick={handleBackToHomePage}>Mark Attendance</p>
          <p onClick={handleRegisterStudents}>Register Students</p>
          <p onClick={handleStudentList}>Students List</p>
          <p onClick={handleSetting}>Settings</p>
        </nav>
        <div className="sidebar-logout" onClick={handleLogout}>
          <img src={LogImg} alt="Logout Icon" />
          <h4>Log Out</h4>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
