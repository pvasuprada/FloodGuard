import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Navigation from "./components/Navigation";
import GovernmentAndUrbanPlanners from "./pages/services/GovernmentAndUrbanPlanners";

function App() {
  return (
    <Box minH="100vh">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/governments"
            element={<GovernmentAndUrbanPlanners />}
          />
          <Route path="/services/businesses" element={<Services />} />
          <Route path="/services/insurance" element={<Services />} />
          <Route path="/services/communities" element={<Services />} />
          <Route path="/services/education" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
