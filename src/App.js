import Footer from "./Footer";
import JsonCreate from "./JsonCreate";
import Line from "./Line";
import Navbar from "./Navbar";
import './tailwind.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow" style={{}}>
        <Line />
        <JsonCreate />
      </div>
      <Footer />
    </div>
  );
}

export default App;
