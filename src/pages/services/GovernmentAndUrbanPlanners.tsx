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
} from "@chakra-ui/react";

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
                src="/government-illustration.png"
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
                See how FloodGuard can help you predict, plan, and protect —
                before the next flood hits.
              </Text>
              <Text fontSize="lg" color="gray.600" mb={8}>
                Whether you're a government official, urban planner, or city
                administrator, our flood risk assessment tools are built to meet
                your specific needs. Book a free demo to explore how FloodGuard
                works and how it can be tailored for your jurisdiction.
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
                    <FormLabel>Department / Role</FormLabel>
                    <Select
                      placeholder="Select"
                      size="lg"
                      borderRadius="md"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    >
                      <option value="urban-planning">Urban Planning</option>
                      <option value="emergency-response">
                        Emergency Response
                      </option>
                      <option value="infrastructure">
                        Infrastructure Development
                      </option>
                      <option value="policy">Policy & Administration</option>
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
    </Box>
  );
};

export default GovernmentAndUrbanPlanners;
