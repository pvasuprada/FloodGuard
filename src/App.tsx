import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Navigation from "./components/Navigation";
import GovernmentAndUrbanPlanners from "./pages/services/GovernmentAndUrbanPlanners";
import Businesses from "./pages/services/Businesses";
import InsuranceAndFinancial from "./pages/services/InsuranceAndFinancial";
import CommunitiesAndIndividuals from "./pages/services/CommunitiesAndIndividuals";
import EducationAndResearch from "./pages/services/EducationAndResearch";

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
          <Route path="/services/businesses" element={<Businesses />} />
          <Route
            path="/services/insurance"
            element={<InsuranceAndFinancial />}
          />
          <Route
            path="/services/communities"
            element={<CommunitiesAndIndividuals />}
          />
          <Route
            path="/services/education"
            element={<EducationAndResearch />}
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
