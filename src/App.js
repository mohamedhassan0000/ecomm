import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import Detailes from "./components/pages/Detailes";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Container style={{ marginTop: "80px", marginBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/details/:title" element={<Detailes />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
