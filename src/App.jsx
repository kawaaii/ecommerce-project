import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import UserLogin from "./pages/UserLogin";

import "./index.css";

function App() {
  return (
    <>
      <section className="me-1 mt-1 flex min-h-screen flex-col items-center">
        <NavigationBar />
        <main className="container flex flex-1 flex-col">
          <Router>
            <section className="flex flex-1 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </section>
          </Router>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
