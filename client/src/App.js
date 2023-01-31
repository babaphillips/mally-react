import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Main from "./Pages/Main";

const App = () => {
  const [page, setPage] = useState("menu");
  return (
    <>
      <Router>
        <Header setPage={setPage} />
        <Main />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
