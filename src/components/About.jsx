import React from "react";
import aboutImg from "../assets/image2.jpg"; // your image here

const AboutSection = () => {
  return (
    <div style={styles.container}>
      
      {/* Left Side - Text */}
      <div style={styles.textBox}>
        <h2 style={styles.title}>Welcome to Hampton by Hilton Humberside Airport</h2>

        <p style={styles.text}>
          A very warm welcome to the Hampton, your home away from home.
        </p>

        <p style={styles.text}>
          All of the information you may need about the hotel and its facilities can be found within this guide.
        </p>

        <p style={styles.text}>
          Thank you for choosing to stay with us. We trust you will find your stay here comfortable and enjoyable.  Should you require any further information, please do not hesitate to contact the team who will be more than happy to help.
        </p>

        <p style={styles.text}>
          Warm regards,
        </p>
        
        <p style={styles.text}>
          Ben Hall <br />
          General Manager 
        </p>
      </div>

      {/* Right Side - Image */}
      <div style={styles.imageBox}>
        <img src={aboutImg} alt="About Hotel" style={styles.image} />
      </div>

    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "rgb(0, 71, 181)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap", // mobile responsive
  },

  textBox: {
    flex: 1,
    minWidth: "300px",
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
    padding: "0 40px 0 40px",
  },

  title: {
    fontSize: "50px",
    color: "#ffff",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#ffff",
    marginBottom: "15px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  },

  imageBox: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
  },

  image: {
  width: "440px",
  height: "630px",
  objectFit: "cover", 
  borderRadius: "10px",
  },
};

export default AboutSection;