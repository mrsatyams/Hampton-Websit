import React from "react";
import logo from "../assets/footerimg.png";

export default function Footer() {
  return (
    <div style={styles.footer}>
      <img src={logo} alt="Hampton Logo" style={styles.logo} />
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: "rgb(0, 71, 181)",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: "20px",
  },

  logo: {
    marginBottom: "0px",
    width: "600px",
    height: "auto",
    objectFit: "contain",
    transform: "translate(0px, -7.82209px) rotate(0deg)",
  },
};