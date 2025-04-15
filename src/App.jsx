import { Navbar } from "./components/nav bar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import Fondo from "./assets/fondo3.jpg";
import "./index.css";
function app() {
  
  
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  };
  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      
      
    </div>
  );
}
export default app;
