import Navbar from "./Components/Navbar"
import './App.css';
import AllRoutes from "./Routes/AllRoutes"
import Footer from "./Components/Footer";
import Home from "./Components/Home"
function App() {
  return (
    <>

      <Navbar />
      <Home />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
