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
                src="/business-illustration.png"
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
              <Image
                src="/risk-assessment-icon.png"
                alt="Risk Assessment"
                h="60px"
              />
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
              <Image
                src="/location-icon.png"
                alt="Location Advisory"
                h="60px"
              />
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
              <Image
                src="/continuity-icon.png"
                alt="Business Continuity"
                h="60px"
              />
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
      <Box bg="gray.50" py={20}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
            {/* Left Column - Description */}
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", lg: "4xl" }}
                color="#0F2922"
                mb={6}
              >
                What to Expect in the Demo:
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={8}>
                See how FloodGuard can help your business predict, plan, and
                protect — before the next flood hits.
              </Text>
              <Text fontSize="lg" color="gray.600" mb={8}>
                Whether you're a business owner, facility manager, or risk
                assessment officer, our flood risk assessment tools are built to
                meet your specific needs. Book a free demo to explore how
                FloodGuard works and how it can be tailored for your business
                operations.
              </Text>
              <UnorderedList spacing={4} color="gray.600">
                <ListItem>
                  A walk-through of our flood risk assessment process
                </ListItem>
                <ListItem>
                  Real examples of business risk reports and mitigation
                  strategies
                </ListItem>
                <ListItem>
                  Q&A session to discuss your specific requirements
                </ListItem>
                <ListItem>
                  Customisation options for your business case
                </ListItem>
              </UnorderedList>
            </Box>

            {/* Right Column - Form */}
            <Box>
              <Box bg="white" p={8} borderRadius="xl" boxShadow="lg">
                <VStack spacing={6} align="stretch">
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", lg: "3xl" }}
                    color="#0F2922"
                    textAlign="center"
                  >
                    Watch a Demo
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    Provide your details below to receive the demo via email
                  </Text>

                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      placeholder="Enter full name"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Business Type</FormLabel>
                    <Select
                      placeholder="Select"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    >
                      <option value="manufacturing">Manufacturing</option>
                      <option value="retail">Retail</option>
                      <option value="logistics">
                        Logistics & Supply Chain
                      </option>
                      <option value="real-estate">
                        Real Estate Development
                      </option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>

                  <Button
                    bg="#0F2922"
                    color="white"
                    size="lg"
                    width="100%"
                    borderRadius="full"
                    _hover={{ bg: "#1B4B40" }}
                    mt={4}
                  >
                    Submit
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

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
                flood patterns, and geospatial analysis to forecast future flood
                scenarios with precision. Whether it's site selection or
                business continuity planning, we empower safer business
                decisions and climate-resilient investments.
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

export default Businesses;
