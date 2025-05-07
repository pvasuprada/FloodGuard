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

const GovernmentAndUrbanPlanners = () => {
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
                Government &<br />
                Urban Planners
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color="#2D3748"
                mb={8}
                lineHeight="1.7"
              >
                Offers a dynamic dashboard for visualising flood vulnerability
                and future risks. Leveraging high-resolution data and climate
                models, it enables proactive planning, resilient infrastructure,
                and real-time emergency response for urban areas facing current
                and future flood threats.
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
                src="/govtandurbanplanner.png"
                alt="Government Building Illustration"
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
            >
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                High-Vulnerability Zone Identification
              </Heading>
              <Text color="#4A5568">
                Identifies areas highly vulnerable to flooding for smarter land
                use and zoning
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
            >
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Future-Proof Drainage Design
              </Heading>
              <Text color="#4A5568">
                Integrates future flood risks into drainage and stormwater
                network design
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
            >
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Prioritised Infrastructure Upgrades
              </Heading>
              <Text color="#4A5568">
                Enables prioritisation of critical zones for drainage upgrades
                and flood control measures
              </Text>
            </VStack>

            {/* Service 4 */}
            <VStack
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Alignment with National Goals
              </Heading>
              <Text color="#4A5568">
                Provides insights that align with national disaster risk
                reduction & climate adaptation goals
              </Text>
            </VStack>

            {/* Service 5 */}
            <VStack
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Real-Time Response Coordination
              </Heading>
              <Text color="#4A5568">
                Facilitates real-time response coordination during floods
                through layered spatial dashboards
              </Text>
            </VStack>

            {/* Service 6 */}
            <VStack
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              spacing={4}
              align="center"
              textAlign="center"
            >
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Reduced Long-Term Economic Losses
              </Heading>
              <Text color="#4A5568">
                Reduces long-term economic losses by guiding risk-aware
                infrastructure investments
              </Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Watch a Demo Section */}
      <WatchADemo />

      {/* Footer */}
      <FloodGuardFooter />
    </Box>
  );
};

export default GovernmentAndUrbanPlanners;
