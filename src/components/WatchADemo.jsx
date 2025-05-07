import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

const WatchADemo = () => {
  const demoSectionRef = useRef(null);

  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
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
              planner, or homeowner, our flood risk assessment tools are built
              to meet your needs. Book a free demo to explore how FloodGuard
              works and how it can be tailored for your location.
            </Text>
            <UnorderedList spacing={4} color="gray.600">
              <ListItem>
                A walk-through of our flood risk assessment process
              </ListItem>
              <ListItem>Real examples of maps and reports we provide</ListItem>
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

                <form
                  action="https://formsubmit.co/thefloodguard@gmail.com"
                  method="POST"
                >
                  <VStack spacing={6}>
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Demo Request from FloodGuard Website"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value={window.location.href}
                    />

                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        name="name"
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
                        name="email"
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
                        name="role"
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
                      type="submit"
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
                </form>
              </VStack>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default WatchADemo;
