import React from "react";
import { diningData } from "../Data/diningData";

export default function Dining() {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>DINING</h2>

      <div style={styles.container}>
        {diningData.map((item) => (
          <div key={item.id} style={styles.card}>
            
            {/* IMAGE */}
            <div style={styles.imageBox}>
              <img src={item.image} alt={item.title} style={styles.image} />
            </div>

            {/* TEXT */}
            <div style={styles.textBox}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.text}>{item.text}</p>

              {/* CONDITIONAL BUTTON */}
              {item.showButton && (
                <a href={item.link} style={styles.button}>
                  View Menu
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: "60px 80px",
    textAlign: "center",
    backgroundColor: "rgb(200, 128, 0)",
  },

  heading: {
    fontSize: "50px",
    color: "#fff",
    marginBottom: "50px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    padding: "0 0 20px 0",
  },

  imageBox: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  textBox: {
    padding: "10px",
    textAlign: "left",
    border: "1px solid black",
    marginTop: "20px",
    height: "260px",
  },

  title: {
    fontSize: "20px",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    marginTop: "10px",
  },

  text: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#fff",
    marginBottom: "15px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
  display: "block",
  backgroundColor: "rgb(128, 31, 64)",
  color: "#fff",
  padding: "10px 15px",
  borderRadius: "5px",
  fontWeight: "bold",
  width: "fit-content",
  margin: "0 auto",
  textDecoration: "underline", 
},
  buttonBox: {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
},
};