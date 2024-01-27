import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import "./index.css";

function App() {
  return (
    <>
      <div className="me-1 mt-1 flex min-h-screen flex-col items-center">
        <NavigationBar />
        <main className="container flex flex-1 flex-col">
          <Router>
            <div className="flex flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
