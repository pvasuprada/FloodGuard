import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Grid,
  SimpleGrid,
  VStack,
  Image,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Icon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";
import { ChevronDownIcon } from "@chakra-ui/icons";
import WatchADemo from "../../components/WatchADemo";
import FloodGuardFooter from "../../components/FloodGuardFooter";

const InsuranceAndFinancial = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.50" pt="80px">
        <Container maxW="container.xl" py={{ base: 12, lg: 16 }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={12}
            alignItems="center"
          >
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="#1B3C4B"
                lineHeight="1.2"
                mb={6}
              >
                Insurance Companies and Banks
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color="#2D3748"
                mb={8}
                lineHeight="1.7"
              >
                FloodGuard provides insurance companies and financial
                institutions with flood vulnerability zones, future flood risk
                projections, and location-specific climate risk intelligence.
                These tools empower underwriters, portfolio managers, and risk
                officers to evaluate physical climate risks—particularly
                flooding—at granular scales. Our solutions support smarter
                underwriting, better capital allocation, and regulatory
                compliance in line with the IRDAI's Climate Risk and Sustainable
                Finance Framework.
              </Text>
              <Button
                bg="#0F2922"
                color="white"
                size="lg"
                px={8}
                height="56px"
                _hover={{ bg: "darkgreen.700" }}
                borderRadius="full"
              >
                Watch a Demo
              </Button>
            </Box>
            <Box>
              <Image
                src="/insuranceandfinance.png"
                alt="Insurance and Banking Illustration"
                w="full"
                h="auto"
              />
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={{ base: 16, lg: 20 }}>
        <Container maxW="container.xl">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            color="#1B3C4B"
            textAlign="center"
            mb={{ base: 12, lg: 16 }}
          >
            Our Services Empowers
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
            {/* Service 1 */}
            <VStack
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              spacing={4}
              align="center"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
            >
              {/* <Image src="/risk-zones-icon.png" alt="Risk Zones" h="60px" /> */}
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Flood Vulnerability Zones
              </Heading>
              <Text color="#4A5568">
                High-resolution insights into flood-prone areas for risk-based
                premium pricing and loan collateral evaluation across urban and
                rural geographies.
              </Text>
            </VStack>

            {/* Service 2 */}
            <VStack
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              spacing={4}
              align="center"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
            >
              {/* <Image
                src="/projection-icon.png"
                alt="Risk Projection"
                h="60px"
              /> */}
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Future Risk Projections
              </Heading>
              <Text color="#4A5568">
                Climate model simulations for future flood scenarios supporting
                portfolio-level stress testing and long-term risk evaluation.
              </Text>
            </VStack>

            {/* Service 3 */}
            <VStack
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              spacing={4}
              align="center"
              textAlign="center"
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
            >
              {/* <Image
                src="/portfolio-icon.png"
                alt="Portfolio Screening"
                h="60px"
              /> */}
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Portfolio-Wide Screening
              </Heading>
              <Text color="#4A5568">
                Comprehensive portfolio screening tools to identify high-risk
                zones and exposure clusters for proactive risk management.
              </Text>
            </VStack>
          </SimpleGrid>

          {/* Conclusion Section */}
          <Box
            bg="white"
            p={10}
            borderRadius="xl"
            boxShadow="md"
            textAlign="center"
            maxW="container.lg"
            mx="auto"
          >
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#1B3C4B"
              mb={6}
            >
              Why Choose FloodGuard
            </Heading>
            <Text fontSize="lg" color="#4A5568" lineHeight="1.8">
              FloodGuard equips insurers and financial institutions with
              powerful climate intelligence tools that meet both operational and
              regulatory needs. As IRDAI and global frameworks move toward
              mandatory climate risk disclosures, our flood vulnerability zones
              and predictive models help companies not just comply — but lead —
              in building a climate-resilient financial system.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* Watch a Demo Section */}
      <WatchADemo />

      {/* Footer */}
      <FloodGuardFooter />
    </Box>
  );
};

export default InsuranceAndFinancial;
