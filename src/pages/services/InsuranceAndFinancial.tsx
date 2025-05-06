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
                src="/insurance-illustration.png"
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
              <Image src="/risk-zones-icon.png" alt="Risk Zones" h="60px" />
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
              <Image
                src="/projection-icon.png"
                alt="Risk Projection"
                h="60px"
              />
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
              <Image
                src="/portfolio-icon.png"
                alt="Portfolio Screening"
                h="60px"
              />
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
                See how FloodGuard can help your institution evaluate and manage
                flood risks effectively.
              </Text>
              <Text fontSize="lg" color="gray.600" mb={8}>
                Whether you're an underwriter, risk officer, or portfolio
                manager, our flood risk assessment tools are built to meet your
                specific needs. Book a free demo to explore how FloodGuard works
                and how it can be tailored for your institution.
              </Text>
              <UnorderedList spacing={4} color="gray.600">
                <ListItem>
                  Detailed walkthrough of our flood risk assessment methodology
                </ListItem>
                <ListItem>
                  Sample reports and risk analysis demonstrations
                </ListItem>
                <ListItem>
                  Integration capabilities with existing systems
                </ListItem>
                <ListItem>
                  Regulatory compliance features and reporting
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
                    <FormLabel>Institution Type</FormLabel>
                    <Select
                      placeholder="Select"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    >
                      <option value="insurance">Insurance Company</option>
                      <option value="bank">Bank</option>
                      <option value="nbfc">NBFC</option>
                      <option value="asset-management">Asset Management</option>
                      <option value="other">Other Financial Institution</option>
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
                scenarios with precision. Our tools help financial institutions
                make informed decisions and meet regulatory requirements while
                building climate resilience.
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

export default InsuranceAndFinancial;
