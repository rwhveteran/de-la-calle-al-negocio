export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "42px" }}>De La Calle</h1>
      <h2 style={{ color: "gray" }}>From the Street to Business</h2>

      <p style={{ marginTop: "20px" }}>
        We help turn real life struggles into real business opportunities.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}
