import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

const App = () => {
  const [page, setPage] = useState("menu");
  return (
    <>
      <Header setPage={setPage} />
      <main>
        <Container>
          <Home page={page} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
