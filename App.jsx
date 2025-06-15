import React from "react";

export default function AlAinIWebsite() {
  return (
    <div style={{ backgroundColor: "#F9F4EF", color: "#0D1C2E", fontFamily: "sans-serif", padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>alainI</h1>
        <nav>
          <a href="#services" style={{ margin: "0 10px", color: "#6A1B9A" }}>Services</a>
          <a href="#reports" style={{ margin: "0 10px", color: "#6A1B9A" }}>Reports</a>
          <a href="#about" style={{ margin: "0 10px", color: "#6A1B9A" }}>About</a>
          <a href="#contact" style={{ margin: "0 10px", color: "#6A1B9A" }}>Contact</a>
        </nav>
      </header>
      <section style={{ textAlign: "center", padding: "50px 0" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Media Intelligence for a Smarter Tomorrow</h2>
        <p>Monitoring. Analysis. Insight. Action.</p>
        <button style={{ backgroundColor: "#6A1B9A", color: "white", padding: "10px 20px", borderRadius: "8px" }}>Request a Demo</button>
      </section>
    </div>
  );
}
