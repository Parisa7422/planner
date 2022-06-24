import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact-us" element={<h2>Contact us</h2>} />
        <Route path="/about-us" element={<h2>About us</h2>} />
        <Route path="*" element={<h2>Error</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
