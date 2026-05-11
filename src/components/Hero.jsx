import React from "react";
import bgImage from "../assets/bg.jpg";
import logo from "../assets/logo.png";

const HomeHero = () => {
  return (
    <div style={{ ...styles.container, backgroundImage: `url(${bgImage})` }}>
      <div style={styles.overlay}>

        {/* TOP SECTION (TITLE + LOGO) */}
        <div style={styles.topBox}>
          <h1 style={styles.title}>WELCOME TO</h1>
          <img src={logo} alt="logo" style={styles.logo} />
        </div>

        {/* BOTTOM SECTION (BUTTON) */}
        <div style={styles.buttonBox}>
          <div style={styles.button}>
            <h3>LEARN MORE</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeHero;

const styles = {
  container: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "40px",
  
  },

  // 👇 NEW: title + logo group
  topBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  },

  buttonBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  title: {
    color: "#fff",
    fontSize: "48px",
    margin: 0,
  },

  logo: {
    width: "350px",
    objectFit: "contain",
  },

  button: {
    backgroundColor: "#fff",
    color: "#003580",
    width: "290px",
    opacity: "0.8",
    fontSize: "22px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};