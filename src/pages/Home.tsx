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
import WatchADemo from "../components/WatchADemo";
import FloodGuardFooter from "../components/FloodGuardFooter";

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
        <WatchADemo />
        {/* Footer */}
        <FloodGuardFooter />
      </Box>
    </Box>
  );
};

export default Home;
