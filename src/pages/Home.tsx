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
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WatchADemo from "../components/WatchADemo";
import FloodGuardFooter from "../components/FloodGuardFooter";
import { Link as RouterLink } from "react-router-dom";

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
    setTabIndex((prev) => (prev - 1 + 4) % 4);
  };

  const handleNextTab = () => {
    setTabIndex((prev) => (prev + 1) % 4);
  };

  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          pb={{ base: "240px", md: "280px" }}
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
              <Box
                mt={{ base: 8, lg: 12 }}
                mb={{ base: 20, md: 24 }}
                position="relative"
                zIndex={2}
              >
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

        {/* Why Flood Guard Section - Overlapping Card */}
        <Box
          position="absolute"
          bottom={{ base: "-220px", md: "-140px" }}
          left={0}
          right={0}
          zIndex={2}
        >
          <Container maxW="container.xl">
            <Box
              bg="white"
              borderRadius="2xl"
              boxShadow="xl"
              p={{ base: 6, md: 10 }}
              mx={{ base: 4, md: 8 }}
            >
              <VStack spacing={{ base: 6, lg: 8 }} align="center">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", lg: "4xl" }}
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
                >
                  Floods are becoming more unpredictable with climate change. At
                  FloodGuard, we help you stay prepared through our 3-step
                  approach
                </Text>

                {/* Three Column Features */}
                <SimpleGrid
                  columns={{ base: 1, md: 3 }}
                  spacing={{ base: 6, lg: 10 }}
                  w="full"
                >
                  {/* Predict */}
                  <VStack spacing={4} align="center">
                    <Image src="/predict-icon.png" alt="Predict" h="60px" />
                    <Heading as="h3" size="lg" color="#0F2922">
                      Predict
                    </Heading>
                    <Text color="#4A5568" textAlign="center">
                      See how flood risk might change in the coming years
                    </Text>
                  </VStack>

                  {/* Plan */}
                  <VStack spacing={4} align="center">
                    <Image src="/plan-icon.png" alt="Plan" h="60px" />
                    <Heading as="h3" size="lg" color="#0F2922">
                      Plan
                    </Heading>
                    <Text color="#4A5568" textAlign="center">
                      Know where to build safely and where to avoid
                    </Text>
                  </VStack>

                  {/* Protect */}
                  <VStack spacing={4} align="center">
                    <Image src="/protect-icon.png" alt="Protect" h="60px" />
                    <Heading as="h3" size="lg" color="#0F2922">
                      Protect
                    </Heading>
                    <Text color="#4A5568" textAlign="center">
                      Prepare buildings and communities to reduce damage
                    </Text>
                  </VStack>
                </SimpleGrid>
              </VStack>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Rest of the content with white background */}
      <Box bg="white" pt={{ base: "240px", md: "180px" }}>
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
            w="full"
          >
            <Box
              position="relative"
              w="full"
              overflowX="auto"
              pb={4}
              sx={{
                scrollbarWidth: "none",
                "::-webkit-scrollbar": {
                  display: "none",
                },
                "-webkit-overflow-scrolling": "touch",
              }}
            >
              <TabList
                mb={4}
                border="none"
                display="inline-flex"
                minW="max-content"
                gap={3}
                mx={{ base: 4, md: "auto" }}
              >
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="medium"
                  color={tabIndex === 0 ? "white" : "gray.600"}
                  bg={tabIndex === 0 ? "#0F2922" : "transparent"}
                  borderRadius="full"
                  px={4}
                  py={2}
                  minW="max-content"
                  _hover={{ bg: tabIndex === 0 ? "#0F2922" : "gray.100" }}
                  transition="all 0.3s"
                >
                  Governments & Urban Planners
                </Tab>
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="medium"
                  color={tabIndex === 1 ? "white" : "gray.600"}
                  bg={tabIndex === 1 ? "#0F2922" : "transparent"}
                  borderRadius="full"
                  px={4}
                  py={2}
                  minW="max-content"
                  _hover={{ bg: tabIndex === 1 ? "#0F2922" : "gray.100" }}
                  transition="all 0.3s"
                >
                  Communities & Individuals
                </Tab>
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="medium"
                  color={tabIndex === 2 ? "white" : "gray.600"}
                  bg={tabIndex === 2 ? "#0F2922" : "transparent"}
                  borderRadius="full"
                  px={4}
                  py={2}
                  minW="max-content"
                  _hover={{ bg: tabIndex === 2 ? "#0F2922" : "gray.100" }}
                  transition="all 0.3s"
                >
                  Businesses
                </Tab>
                <Tab
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="medium"
                  color={tabIndex === 3 ? "white" : "gray.600"}
                  bg={tabIndex === 3 ? "#0F2922" : "transparent"}
                  borderRadius="full"
                  px={4}
                  py={2}
                  minW="max-content"
                  _hover={{ bg: tabIndex === 3 ? "#0F2922" : "gray.100" }}
                  transition="all 0.3s"
                >
                  Insurance & Financial Institutions
                </Tab>
              </TabList>
            </Box>

            {/* Navigation Arrows */}
            {!isMobile && (
              <>
                <IconButton
                  aria-label="Previous"
                  icon={<ChevronLeftIcon boxSize={6} />}
                  position="absolute"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={handlePrevTab}
                  variant="ghost"
                  size="sm"
                  color="gray.600"
                  _hover={{ bg: "gray.100" }}
                  zIndex={2}
                />
                <IconButton
                  aria-label="Next"
                  icon={<ChevronRightIcon boxSize={6} />}
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={handleNextTab}
                  variant="ghost"
                  size="sm"
                  color="gray.600"
                  _hover={{ bg: "gray.100" }}
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
                  p={{ base: 4, md: 8 }}
                  bg="white"
                  boxShadow="xl"
                  borderRadius="2xl"
                  transition="all 0.3s"
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 6, md: 8 }}
                  >
                    <Box flex={1}>
                      <VStack align="start" spacing={{ base: 4, md: 6 }}>
                        <Heading
                          size={{ base: "md", md: "lg" }}
                          color="#0F2922"
                        >
                          Governments & Urban Planners
                        </Heading>
                        <VStack
                          align="start"
                          spacing={{ base: 3, md: 4 }}
                          pl={0}
                        >
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Build smarter, flood-resilient cities
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Get flood vulnerability maps and future risk
                              insights to guide zoning, drainage, and
                              infrastructure plans
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Use real-time dashboards to support emergency
                              response and climate adaptation policies
                            </Text>
                          </Flex>
                        </VStack>
                        <Button
                          as={RouterLink}
                          to="/services/governments"
                          variant="outline"
                          size={{ base: "md", md: "lg" }}
                          mt={{ base: 2, md: 4 }}
                          borderRadius="full"
                          borderColor="#0F2922"
                          color="#0F2922"
                          w={{ base: "100%", md: "auto" }}
                          _hover={{ bg: "gray.50" }}
                          onClick={scrollToTop}
                        >
                          Learn More
                        </Button>
                      </VStack>
                    </Box>
                    <Box flex={1} h={{ base: "200px", md: "300px" }}>
                      <Image
                        src="/govtandurbanplanner.png"
                        alt="Governments and Urban Planners"
                        w="full"
                        h="full"
                        objectFit="cover"
                        borderRadius="xl"
                      />
                    </Box>
                  </Flex>
                </Box>
              </TabPanel>

              {/* Communities & Individuals */}
              <TabPanel>
                <Box
                  maxW="container.lg"
                  mx="auto"
                  p={{ base: 4, md: 8 }}
                  bg="white"
                  boxShadow="xl"
                  borderRadius="2xl"
                  transition="all 0.3s"
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 6, md: 8 }}
                  >
                    <Box flex={1}>
                      <VStack align="start" spacing={{ base: 4, md: 6 }}>
                        <Heading
                          size={{ base: "md", md: "lg" }}
                          color="#0F2922"
                        >
                          Communities & Individuals
                        </Heading>
                        <VStack
                          align="start"
                          spacing={{ base: 3, md: 4 }}
                          pl={0}
                        >
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600">
                              Protect homes, lives, and livelihoods.
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Get flood risk scorecards for your property to
                              make safe, informed decisions.
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Empower communities to prepare better with
                              localized insights and action plans.
                            </Text>
                          </Flex>
                        </VStack>
                        <Button
                          as={RouterLink}
                          to="/services/communities"
                          variant="outline"
                          size={{ base: "md", md: "lg" }}
                          mt={{ base: 2, md: 4 }}
                          borderRadius="full"
                          borderColor="#0F2922"
                          color="#0F2922"
                          w={{ base: "100%", md: "auto" }}
                          _hover={{ bg: "gray.50" }}
                          onClick={scrollToTop}
                        >
                          Learn More
                        </Button>
                      </VStack>
                    </Box>
                    <Box flex={1} h={{ base: "200px", md: "300px" }}>
                      <Image
                        src="/commandpropowners.png"
                        alt="Communities and Individuals"
                        w="full"
                        h="full"
                        objectFit="cover"
                        borderRadius="xl"
                      />
                    </Box>
                  </Flex>
                </Box>
              </TabPanel>

              {/* Businesses */}
              <TabPanel>
                <Box
                  maxW="container.lg"
                  mx="auto"
                  p={{ base: 4, md: 8 }}
                  bg="white"
                  boxShadow="xl"
                  borderRadius="2xl"
                  transition="all 0.3s"
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 6, md: 8 }}
                  >
                    <Box flex={1}>
                      <VStack align="start" spacing={{ base: 4, md: 6 }}>
                        <Heading
                          size={{ base: "md", md: "lg" }}
                          color="#0F2922"
                        >
                          Businesses
                        </Heading>
                        <VStack
                          align="start"
                          spacing={{ base: 3, md: 4 }}
                          pl={0}
                        >
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              De-risk investments and plan for resilience
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Identify safe locations, assess flood risks, and
                              align operations with ESG goals
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Plan for disruptions with simulations and
                              infrastructure recommendations that protect assets
                              and people
                            </Text>
                          </Flex>
                        </VStack>
                        <Button
                          as={RouterLink}
                          to="/services/businesses"
                          variant="outline"
                          size={{ base: "md", md: "lg" }}
                          mt={{ base: 2, md: 4 }}
                          borderRadius="full"
                          borderColor="#0F2922"
                          color="#0F2922"
                          w={{ base: "100%", md: "auto" }}
                          _hover={{ bg: "gray.50" }}
                          onClick={scrollToTop}
                        >
                          Learn More
                        </Button>
                      </VStack>
                    </Box>
                    <Box flex={1} h={{ base: "200px", md: "300px" }}>
                      <Image
                        src="/businessandinvestors.png"
                        alt="Businesses"
                        w="full"
                        h="full"
                        objectFit="cover"
                        borderRadius="xl"
                      />
                    </Box>
                  </Flex>
                </Box>
              </TabPanel>

              {/* Insurance & Financial Institutions */}
              <TabPanel>
                <Box
                  maxW="container.lg"
                  mx="auto"
                  p={{ base: 4, md: 8 }}
                  bg="white"
                  boxShadow="xl"
                  borderRadius="2xl"
                  transition="all 0.3s"
                >
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 6, md: 8 }}
                  >
                    <Box flex={1}>
                      <VStack align="start" spacing={{ base: 4, md: 6 }}>
                        <Heading
                          size={{ base: "md", md: "lg" }}
                          color="#0F2922"
                        >
                          Insurance & Financial Institutions
                        </Heading>
                        <VStack
                          align="start"
                          spacing={{ base: 3, md: 4 }}
                          pl={0}
                        >
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Climate-proof your portfolios.
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Access flood risk projections and exposure maps to
                              support smarter underwriting and lending.
                            </Text>
                          </Flex>
                          <Flex gap={3}>
                            <Box
                              as="span"
                              w={2}
                              h={2}
                              bg="gray.600"
                              borderRadius="full"
                              mt={2}
                              flexShrink={0}
                            />
                            <Text color="gray.600" align={"left"}>
                              Comply with IRDAI's climate guidelines through
                              stress testing, disclosures, and sustainable
                              finance planning.
                            </Text>
                          </Flex>
                        </VStack>
                        <Button
                          as={RouterLink}
                          to="/services/insurance"
                          variant="outline"
                          size={{ base: "md", md: "lg" }}
                          mt={{ base: 2, md: 4 }}
                          borderRadius="full"
                          borderColor="#0F2922"
                          color="#0F2922"
                          w={{ base: "100%", md: "auto" }}
                          _hover={{ bg: "gray.50" }}
                          onClick={scrollToTop}
                        >
                          Learn More
                        </Button>
                      </VStack>
                    </Box>
                    <Box flex={1} h={{ base: "200px", md: "300px" }}>
                      <Image
                        src="/insuranceandfinance.png"
                        alt="Insurance and Financial Institutions"
                        w="full"
                        h="full"
                        objectFit="cover"
                        borderRadius="xl"
                      />
                    </Box>
                  </Flex>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
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
