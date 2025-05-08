function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Marii! Quero que tu saiba que você é uma pessoa extremamente especial
        pra mim! ❤️
      </h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f8ff",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    fontFamily: "Arial, sans-serif",
    fontSize: "2rem",
    color: "#333",
  },
};

export default Home;
