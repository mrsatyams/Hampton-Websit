import React from "react";
import HomePage from "./HomePage";

const HotelPage = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <HomePage />

      {/* Hero Section */}
      <section style={styles.hero}>
        <img
          src="https://www.hilton.com/im/en/HUYAPHX/14689291/hotel-exterior.jpg"
          alt="Hotel"
          style={styles.heroImage}
        />
      </section>

      {/* About Section */}
      <section style={styles.section}>
        <h2>About the Hotel</h2>
        <p>
          Located just a short walk from the airport, this hotel offers modern
          rooms, free breakfast, and excellent amenities for both business and
          leisure travelers.
        </p>
      </section>

      {/* Amenities */}
      <section style={styles.section}>
        <h2>Amenities</h2>
        <ul>
          <li>Free WiFi</li>
          <li>Complimentary Breakfast</li>
          <li>Fitness Center</li>
          <li>On-site Restaurant</li>
          <li>Meeting Rooms</li>
        </ul>
      </section>

      {/* Rooms */}
      <section style={styles.section}>
        <h2>Rooms & Suites</h2>
        <p>
          Comfortable rooms with HDTV, workspace, and modern interiors designed
          for relaxation and productivity.
        </p>
      </section>

      {/* Dining */}
      <section style={styles.section}>
        <h2>Dining</h2>
        <p>
          Enjoy meals at the Touchdown Bar & Grill or grab snacks anytime from
          the 24/7 Hub.
        </p>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 Hotel Guide</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  header: {
    background: "#003580",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  hero: {
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
  },
  section: {
    padding: "20px",
  },
  footer: {
    background: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  },
};

export default HotelPage;