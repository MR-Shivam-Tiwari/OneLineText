import Footer from "./Footer";
import Line from "./Line";
import Navbar from "./Navbar";
import './tailwind.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow" style={{}}>
        <Line />
      </div>
      <Footer />
    </div>
  );
}

export default App;
