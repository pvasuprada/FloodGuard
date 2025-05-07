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

const Businesses = () => {
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
                Businesses
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color="#2D3748"
                mb={8}
                lineHeight="1.7"
              >
                FloodGuard supports businesses in making climate-resilient
                decisions by offering advanced tools for site-specific flood
                risk assessments, identifying suitable locations aligned with
                ESG and climate adaptation goals, and providing actionable
                insights to support business continuity and infrastructure
                planning. These services are designed to help companies de-risk
                their investments and build long-term operational resilience in
                the face of increasing climate uncertainty.
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
                src="/businessandinvestors.png"
                alt="Business Building Illustration"
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
              {/* <Image
                src="/risk-assessment-icon.png"
                alt="Risk Assessment"
                h="60px"
              /> */}
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Site-Specific Flood Risk Assessment
              </Heading>
              <Text color="#4A5568">
                We evaluate flood risk for current or planned business sites
                using historical data, satellite imagery, and future climate
                projections for informed decision-making.
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
                src="/location-icon.png"
                alt="Location Advisory"
                h="60px"
              /> */}
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Location Advisory Based on ESG
              </Heading>
              <Text color="#4A5568">
                Recommend optimal locations based on flood risk, climate
                adaptability, and ESG policies to future-proof your business
                operations.
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
                src="/continuity-icon.png"
                alt="Business Continuity"
                h="60px"
              /> */}
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Business Continuity Planning
              </Heading>
              <Text color="#4A5568">
                Provide insights and simulations for disruption scenarios,
                helping identify mitigation measures and emergency response
                protocols.
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
              With FloodGuard, businesses gain a powerful decision-making ally
              that not only identifies risk but also unlocks opportunities to
              grow sustainably and resiliently. Our services enable companies to
              plan smart, adapt early, and thrive in a changing climate—while
              staying accountable to ESG standards and regulatory expectations.
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

export default Businesses;
