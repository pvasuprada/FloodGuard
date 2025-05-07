import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  useBreakpointValue,
  IconButton,
  Grid,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Link,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaGlobe } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const demoSectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if we should scroll to demo section
    if (location.state?.scrollToDemo) {
      demoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handlePrevTab = () => {
    setTabIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNextTab = () => {
    setTabIndex((prev) => (prev + 1) % 3);
  };

  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      {/* Hero Section with Background */}
      <Box position="relative" minH="100vh">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="url('/floodbg.png')"
          bgColor="#f5f5f5"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          opacity={1}
          zIndex={0}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: "rgba(255, 255, 255, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <Container
          maxW="container.xl"
          pt={{ base: "100px", md: "120px" }}
          pb="60px"
          position="relative"
          zIndex={1}
        >
          <Box maxW={{ base: "100%", lg: "90%" }} ml={{ base: 4, lg: 8 }}>
            <VStack align="flex-start" spacing={{ base: 6, lg: 8 }}>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "7xl" }}
                color="#0F2922"
                lineHeight="1.1"
                fontWeight="bold"
                letterSpacing="-0.02em"
              >
                Stay ahead of Floods
              </Heading>

              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
                color="#0F2922"
                fontWeight="medium"
                mt="0 !important"
                letterSpacing="-0.01em"
              >
                Predict, Plan & Protect
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                color="#0F2922"
                maxW="800px"
                lineHeight="1.6"
                mt={4}
                opacity={0.9}
              >
                India has witnessed a staggering 1400% surge in flood-related
                economic losses between 1990 and 2020 (CWC), driven by rapid
                urbanization and climate change. Despite this alarming trend,
                there remains a significant gap in localized flood risk
                assessments, preparedness, and resilience-building.
              </Text>

              <Button
                bg="#0F2922"
                color="white"
                px={8}
                py={6}
                size="lg"
                borderRadius="full"
                fontSize="md"
                fontWeight="medium"
                _hover={{ bg: "#1B4B40" }}
                mt={6}
                boxShadow="md"
                onClick={scrollToDemo}
              >
                Watch a Demo
              </Button>

              {/* Incubation Section */}
              <Box mt={{ base: 12, lg: 16 }}>
                <Text color="#0F2922" mb={4} fontSize="sm" fontWeight="medium">
                  Incubated in
                </Text>
                <Box display="flex" gap={4}>
                  <Image
                    src="/emblem1.png"
                    alt="Incubation Emblems"
                    height="50px"
                    objectFit="contain"
                    objectPosition="left"
                  />
                  <Image
                    src="/emblem2.png"
                    alt="Incubation Emblems"
                    height="50px"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </Box>
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* Rest of the content with white background */}
      <Box bg="white">
        {/* Why Flood Guard Section */}
        <Box
          bg="white"
          mt={{ base: 16, lg: 20 }}
          py={{ base: 16, lg: 20 }}
          position="relative"
        >
          <Container maxW="container.xl">
            <VStack spacing={{ base: 8, lg: 12 }} align="center">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", lg: "5xl" }}
                color="#0F2922"
                fontWeight="bold"
                textAlign="center"
                letterSpacing="-0.02em"
              >
                Why Flood Guard?
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                color="#4A5568"
                textAlign="center"
                maxW="container.md"
                mb={8}
              >
                Floods are becoming more unpredictable with climate change. At
                FloodGuard, we help you stay prepared through our 3-step
                approach
              </Text>

              {/* Three Column Features */}
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 6, lg: 10 }}
                mt={{ base: 8, lg: 12 }}
                w="full"
                px={{ base: 4, lg: 8 }}
              >
                {/* Predict */}
                <VStack
                  p={{ base: 6, lg: 8 }}
                  bg="white"
                  boxShadow="lg"
                  borderRadius="xl"
                  align="center"
                  spacing={4}
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                >
                  <Image src="/predict-icon.png" alt="Predict" h="60px" />
                  <Heading as="h3" size="lg" color="#0F2922">
                    Predict
                  </Heading>
                  <Text color="#4A5568" textAlign="center">
                    See how flood risk might change in the coming years
                  </Text>
                </VStack>

                {/* Plan */}
                <VStack
                  p={{ base: 6, lg: 8 }}
                  bg="white"
                  boxShadow="lg"
                  borderRadius="xl"
                  align="center"
                  spacing={4}
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                >
                  <Image src="/plan-icon.png" alt="Plan" h="60px" />
                  <Heading as="h3" size="lg" color="#0F2922">
                    Plan
                  </Heading>
                  <Text color="#4A5568" textAlign="center">
                    Know where to build safely and where to avoid
                  </Text>
                </VStack>

                {/* Protect */}
                <VStack
                  p={{ base: 6, lg: 8 }}
                  bg="white"
                  boxShadow="lg"
                  borderRadius="xl"
                  align="center"
                  spacing={4}
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                >
                  <Image src="/protect-icon.png" alt="Protect" h="60px" />
                  <Heading as="h3" size="lg" color="#0F2922">
                    Protect
                  </Heading>
                  <Text color="#4A5568" textAlign="center">
                    Prepare buildings and communities to reduce damage
                  </Text>
                </VStack>
              </SimpleGrid>

              {/* Carousel Section */}
              <Box w="full" mt={{ base: 16, lg: 20 }}>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  color="#0F2922"
                  fontWeight="bold"
                  textAlign="center"
                  mb={{ base: 8, lg: 12 }}
                  letterSpacing="-0.02em"
                >
                  Join us in Building Flood-Resilient Communities
                </Heading>

                <Tabs
                  index={tabIndex}
                  onChange={setTabIndex}
                  variant="unstyled"
                  align="center"
                  position="relative"
                >
                  <TabList
                    mb={8}
                    border="none"
                    display="flex"
                    justifyContent="center"
                    gap={4}
                  >
                    <Tab
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="medium"
                      color={tabIndex === 0 ? "white" : "gray.600"}
                      bg={tabIndex === 0 ? "#0F2922" : "transparent"}
                      borderRadius="full"
                      px={6}
                      py={3}
                      _hover={{ bg: tabIndex === 0 ? "#0F2922" : "gray.100" }}
                      transition="all 0.3s"
                    >
                      Governments & Urban Planners
                    </Tab>
                    <Tab
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="medium"
                      color={tabIndex === 1 ? "white" : "gray.600"}
                      bg={tabIndex === 1 ? "#0F2922" : "transparent"}
                      borderRadius="full"
                      px={6}
                      py={3}
                      _hover={{ bg: tabIndex === 1 ? "#0F2922" : "gray.100" }}
                      transition="all 0.3s"
                    >
                      Communities & Property Owners
                    </Tab>
                    <Tab
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="medium"
                      color={tabIndex === 2 ? "white" : "gray.600"}
                      bg={tabIndex === 2 ? "#0F2922" : "transparent"}
                      borderRadius="full"
                      px={6}
                      py={3}
                      _hover={{ bg: tabIndex === 2 ? "#0F2922" : "gray.100" }}
                      transition="all 0.3s"
                    >
                      Businesses & Investors
                    </Tab>
                  </TabList>

                  {/* Navigation Arrows */}
                  {!isMobile && (
                    <>
                      <IconButton
                        aria-label="Previous"
                        icon={<ChevronLeftIcon boxSize={8} />}
                        position="absolute"
                        left={0}
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={handlePrevTab}
                        variant="ghost"
                        size="lg"
                        zIndex={2}
                      />
                      <IconButton
                        aria-label="Next"
                        icon={<ChevronRightIcon boxSize={8} />}
                        position="absolute"
                        right={0}
                        top="50%"
                        transform="translateY(-50%)"
                        onClick={handleNextTab}
                        variant="ghost"
                        size="lg"
                        zIndex={2}
                      />
                    </>
                  )}

                  <TabPanels>
                    {/* Government & Urban Planners */}
                    <TabPanel>
                      <Box
                        maxW="container.lg"
                        mx="auto"
                        p={8}
                        bg="white"
                        boxShadow="xl"
                        borderRadius="2xl"
                        transition="all 0.3s"
                      >
                        <Flex direction={{ base: "column", md: "row" }} gap={8}>
                          <Box flex={1}>
                            <Image
                              src="/govtandurbanplanner.png"
                              alt="Governments and Urban Planners"
                              w="full"
                              h="300px"
                              objectFit="cover"
                              borderRadius="xl"
                            />
                          </Box>
                          <Box flex={1}>
                            <VStack align="start" spacing={4}>
                              <Heading size="lg" color="#0F2922">
                                Flood Hazard Mapping & Zoning Support
                              </Heading>
                              <Text color="gray.600">
                                Identify high-risk areas for sustainable urban
                                planning, land-use regulation, and
                                infrastructure development.
                              </Text>
                              <Heading size="md" color="#0F2922" mt={4}>
                                Future Flood Risk Projections
                              </Heading>
                              <Text color="gray.600">
                                Use climate models to assess how flood risk may
                                evolve, helping shape long-term infrastructure
                                and policy decisions.
                              </Text>
                              <Button
                                colorScheme="blue"
                                size="lg"
                                mt={4}
                                borderRadius="full"
                              >
                                Learn More
                              </Button>
                            </VStack>
                          </Box>
                        </Flex>
                      </Box>
                    </TabPanel>

                    {/* Communities & Property Owners */}
                    <TabPanel>
                      <Box
                        maxW="container.lg"
                        mx="auto"
                        p={8}
                        bg="white"
                        boxShadow="xl"
                        borderRadius="2xl"
                        transition="all 0.3s"
                      >
                        <Flex direction={{ base: "column", md: "row" }} gap={8}>
                          <Box flex={1}>
                            <Image
                              src="/commandpropowners.png"
                              alt="Communities and Property Owners"
                              w="full"
                              h="300px"
                              objectFit="cover"
                              borderRadius="xl"
                            />
                          </Box>
                          <Box flex={1}>
                            <VStack align="start" spacing={4}>
                              <Heading size="lg" color="#0F2922">
                                Property-Level Risk Assessment
                              </Heading>
                              <Text color="gray.600">
                                Help homeowners and buyers understand flood
                                exposure before making property decisions.
                              </Text>
                              <Heading size="md" color="#0F2922" mt={4}>
                                Community Risk Profiles
                              </Heading>
                              <Text color="gray.600">
                                Generate flood risk maps and reports for
                                neighbourhoods, apartments, or housing colonies
                                to support preparedness.
                              </Text>
                              <Button
                                colorScheme="blue"
                                size="lg"
                                mt={4}
                                borderRadius="full"
                              >
                                Learn More
                              </Button>
                            </VStack>
                          </Box>
                        </Flex>
                      </Box>
                    </TabPanel>

                    {/* Businesses & Investors */}
                    <TabPanel>
                      <Box
                        maxW="container.lg"
                        mx="auto"
                        p={8}
                        bg="white"
                        boxShadow="xl"
                        borderRadius="2xl"
                        transition="all 0.3s"
                      >
                        <Flex direction={{ base: "column", md: "row" }} gap={8}>
                          <Box flex={1}>
                            <Image
                              src="/businessandinvestors.png"
                              alt="Businesses and Investors"
                              w="full"
                              h="300px"
                              objectFit="cover"
                              borderRadius="xl"
                            />
                          </Box>
                          <Box flex={1}>
                            <VStack align="start" spacing={4}>
                              <Heading size="lg" color="#0F2922">
                                Site-Specific Flood Risk Reports
                              </Heading>
                              <Text color="gray.600">
                                Evaluate flood exposure for commercial
                                properties, industrial facilities, and future
                                investment sites.
                              </Text>
                              <Heading size="md" color="#0F2922" mt={4}>
                                Portfolio-Wide Risk Analysis
                              </Heading>
                              <Text color="gray.600">
                                Analyse multiple assets across geographies to
                                guide investment planning and climate-resilient
                                infrastructure decisions.
                              </Text>
                              <Button
                                colorScheme="blue"
                                size="lg"
                                mt={4}
                                borderRadius="full"
                              >
                                Learn More
                              </Button>
                            </VStack>
                          </Box>
                        </Flex>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Watch a Demo Section */}
        <Box bg="gray.50" py={20} ref={demoSectionRef} id="demo-section">
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
                  See how FloodGuard can help you predict, plan, and protect —
                  before the next flood hits.
                </Text>
                <Text fontSize="lg" color="gray.600" mb={8}>
                  Whether you're a government official, business owner, urban
                  planner, or homeowner, our flood risk assessment tools are
                  built to meet your needs. Book a free demo to explore how
                  FloodGuard works and how it can be tailored for your location.
                </Text>
                <UnorderedList spacing={4} color="gray.600">
                  <ListItem>
                    A walk-through of our flood risk assessment process
                  </ListItem>
                  <ListItem>
                    Real examples of maps and reports we provide
                  </ListItem>
                  <ListItem>
                    Q&A session to discuss your specific requirements
                  </ListItem>
                  <ListItem>Customisation options for your use case</ListItem>
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
                      <FormLabel>Organisation / Type of Client</FormLabel>
                      <Select
                        placeholder="Select"
                        size="lg"
                        borderRadius="md"
                        borderColor="gray.300"
                        _hover={{ borderColor: "gray.400" }}
                      >
                        <option value="government">
                          Government & Urban Planning
                        </option>
                        <option value="community">
                          Communities & Property Owners
                        </option>
                        <option value="business">Businesses & Investors</option>
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
                      onClick={scrollToDemo}
                    >
                      Watch a Demo
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
                  <Image
                    src="/logo.png"
                    alt="FloodGuard Logo"
                    h="50px"
                    mb={6}
                  />
                </Link>
                <Text color="gray.600" maxW="md" mb={8}>
                  FloodGuard combines satellite data, climate models, historical
                  flood patterns, and geospatial analysis to forecast future
                  flood scenarios with precision. Whether it's zoning decisions
                  or emergency planning, we empower safer infrastructure
                  development and climate-resilient investments
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
    </Box>
  );
};

export default Home;
