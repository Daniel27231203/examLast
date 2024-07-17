import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import DetailPage from "./pages/DetailPage/DetailPage";
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
