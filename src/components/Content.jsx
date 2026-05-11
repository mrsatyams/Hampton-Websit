import React from "react";
import { contentData } from "../Data/contentData";

export default function ContentSection() {
  return (
    <div>
      {contentData.map((item) => (
        <div key={item.id} style={styles.container}>

          {/* IMAGE */}
          <div style={styles.imageBox}>
            <img src={item.image} alt="hotel" style={styles.image} />
          </div>

          {/* TEXT */}
          <div style={styles.textBox}>

            <h1 style={styles.mainTitle}>{item.mainTitle}</h1>

            {item.sections.map((sec, index) => (
              <div key={index} style={styles.sectionBox}>

                {sec.subTitle && (
                  <h3 style={styles.subTitle}>{sec.subTitle}</h3>
                )}

                {sec.text && (
                  <h5 style={styles.text}>
                    {sec.text}
                  </h5>
                )}

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


const styles = {
  container: {
    backgroundColor: "rgb(189, 212, 229)",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: "30px 40px",
    gap: "40px",
    flexWrap: "wrap",
  },

  imageBox: {
    flex: 1,
    minWidth: "300px",
  },

  image: {
    width: "440px",
    height: "630px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  textBox: {
    flex: 1,
    minWidth: "300px",
    textAlign: "left",
    justifyContent: "center",
  },

  mainTitle: {
    fontSize: "45px",
    fontWeight: "bold",
    color: "rgb(0, 38, 102)",
    marginBottom: "25px",
    fontFamily: "'Poppins', sans-serif",
  },

  sectionBox: {
    marginBottom: "20px",
  },

  subTitle: {
    fontSize: "25px",
    color: "rgb(0, 38, 102)",
    marginBottom: "5px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    fontFamily: "'Poppins', sans-serif",
    color: "rgb(0, 38, 102)",
    fontWeight: "bold",
  },
};