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

const CommunitiesAndIndividuals = () => {
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
                Communities and Individuals
              </Heading>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                color="#2D3748"
                mb={8}
                lineHeight="1.7"
              >
                FloodGuard empowers individuals, families, and community groups
                with location-specific flood insights to make smarter decisions
                about where they live, how they build, and how they protect
                their property. Our key product for this sector is the Flood
                Risk Scorecard — a simple yet powerful tool that assesses
                current and future flood risk for specific properties,
                neighborhoods, or community zones.
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
                src="/community-illustration.png"
                alt="Community and Individuals Illustration"
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
              <Image src="/scorecard-icon.png" alt="Risk Scorecard" h="60px" />
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Property-Level Risk Scorecards
              </Heading>
              <Text color="#4A5568">
                Comprehensive risk profiles for homes and properties, showing
                vulnerability to present and future flood events with detailed
                analysis.
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
              <Image
                src="/commandpropowners.png"
                alt="Community Planning"
                h="60px"
              />
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Community Resilience Planning
              </Heading>
              <Text color="#4A5568">
                Tools for resident associations to identify risks and prioritize
                collective measures for flood protection and infrastructure
                improvement.
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
              <Image
                src="/guidance-icon.png"
                alt="Construction Guidance"
                h="60px"
              />
              <Heading as="h3" fontSize="xl" color="#1B3C4B">
                Construction & Protection Guidance
              </Heading>
              <Text color="#4A5568">
                Expert guidance for flood-resilient construction and property
                modifications, from plinth levels to drainage solutions.
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
              By offering accessible, hyper-local flood insights, FloodGuard
              enables individuals and communities to take control of their
              climate risk. Whether it's deciding where to live, how to build,
              or how to prepare, our Flood Risk Scorecards help everyday people
              protect what matters most — their homes, their savings, and their
              lives.
            </Text>
          </Box>
        </Container>
      </Box>

      {/* Watch a Demo Section */}
      <WatchADemo />

      {/* Footer */}
      <Box bg="white" py={16} borderTop="1px" borderColor="gray.100">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", md: "2fr 1fr 1fr" }} gap={12}>
            {/* Logo and Description */}
            <Box>
              <Link as={RouterLink} to="/">
                <Image src="/logo.png" alt="FloodGuard Logo" h="50px" mb={6} />
              </Link>
              <Text color="gray.600" maxW="md" mb={8}>
                FloodGuard combines satellite data, climate models, historical
                flood patterns, and geospatial analysis to make flood risk
                information accessible to everyone. Our tools help communities
                and individuals make informed decisions to protect their homes
                and loved ones.
              </Text>
              <HStack spacing={4}>
                <IconButton
                  as="a"
                  href="https://facebook.com"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  color="gray.500"
                  _hover={{ color: "gray.700" }}
                />
                <IconButton
                  as="a"
                  href="https://instagram.com"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                  color="gray.500"
                  _hover={{ color: "gray.700" }}
                />
                <IconButton
                  as="a"
                  href="https://youtube.com"
                  aria-label="YouTube"
                  icon={<FaYoutube />}
                  variant="ghost"
                  color="gray.500"
                  _hover={{ color: "gray.700" }}
                />
              </HStack>
            </Box>

            {/* Navigation Links - Left */}
            <VStack align="start" spacing={4}>
              <Link
                as={RouterLink}
                to="/"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Home
              </Link>
              <Link
                as={RouterLink}
                to="/services"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Services
              </Link>
              <Link
                as={RouterLink}
                to="/resources"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Resources
              </Link>
            </VStack>

            {/* Navigation Links - Right */}
            <VStack align="start" spacing={4}>
              <Link
                as={RouterLink}
                to="/about"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                About Us
              </Link>
              <Link
                as={RouterLink}
                to="/company"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                Company
              </Link>
              <Link
                as={RouterLink}
                to="/faqs"
                color="gray.700"
                _hover={{ color: "gray.900" }}
              >
                FAQs
              </Link>
            </VStack>
          </Grid>

          {/* Bottom Bar */}
          <Flex
            borderTop="1px"
            borderColor="gray.100"
            mt={12}
            pt={8}
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
            gap={4}
          >
            <Text color="gray.600">©2025 FloodGuard.in</Text>
            <HStack spacing={6}>
              <Link color="gray.600" _hover={{ color: "gray.900" }}>
                Terms of Service
              </Link>
              <Link color="gray.600" _hover={{ color: "gray.900" }}>
                Privacy Policy
              </Link>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  variant="ghost"
                  color="gray.600"
                >
                  <HStack>
                    <Icon as={FaGlobe} />
                    <Text>English</Text>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>English</MenuItem>
                  <MenuItem>हिंदी</MenuItem>
                  <MenuItem>தமிழ்</MenuItem>
                  <MenuItem>తెలుగు</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default CommunitiesAndIndividuals;
