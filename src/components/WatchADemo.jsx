import React, { useRef, useState } from "react";
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
  Textarea,
  useToast,
} from "@chakra-ui/react";

const WatchADemo = () => {
  const demoSectionRef = useRef(null);
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Show success toast immediately
    toast({
      title: "Successfully submitted!",
      description: "Redirecting to Demo Video...",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });

    // Submit the form
    const form = e.target;
    form.submit();

    // Redirect after toast
    setTimeout(() => {
      window.location.href = "https://youtu.be/l8pN_11Ilrc?si=n6aXSxNLaVCNecs5";
    }, 2000);
  };

  return (
    <Box bg="gray.50" py={12} ref={demoSectionRef} id="demo-section">
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {/* Left Column - Description */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", lg: "4xl" }}
              color="#0F2922"
              mb={4}
            >
              What to Expect in the Demo:
            </Heading>
            <Text fontSize="lg" color="gray.600" mb={4}>
              See how FloodGuard can help you predict, plan, and protect —
              before the next flood hits.
            </Text>
            <Text fontSize="lg" color="gray.600" mb={4}>
              Whether you're a government official, business owner, urban
              planner, or homeowner, our flood risk assessment tools are built
              to meet your needs. Book a free demo to explore how FloodGuard
              works and how it can be tailored for your location.
            </Text>
            <UnorderedList spacing={3} color="gray.600">
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
            <Box bg="white" p={6} borderRadius="xl" boxShadow="lg">
              <VStack spacing={4} align="stretch">
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  color="#0F2922"
                  textAlign="center"
                  mb={2}
                >
                  Watch a Demo
                </Heading>

                <form
                  action="https://formsubmit.co/thefloodguard@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <VStack spacing={4}>
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Demo Request from FloodGuard Website"
                    />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="false" />

                    <FormControl isRequired>
                      <FormLabel mb={1}>Full Name</FormLabel>
                      <Input
                        name="name"
                        placeholder="Enter full name"
                        size="md"
                        borderRadius="md"
                        borderColor="gray.300"
                        _hover={{ borderColor: "gray.400" }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel mb={1}>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        size="md"
                        borderRadius="md"
                        borderColor="gray.300"
                        _hover={{ borderColor: "gray.400" }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel mb={1}>
                        Organisation / Type of Client
                      </FormLabel>
                      <Select
                        name="role"
                        placeholder="Select"
                        size="md"
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
                        <option value="insurance">
                          Insurance & Financial Institutions
                        </option>
                      </Select>
                    </FormControl>

                    <Grid templateColumns="1fr 1fr" gap={4} w="100%">
                      <FormControl isRequired>
                        <FormLabel mb={1}>Preferred Date</FormLabel>
                        <Input
                          name="preferred_date"
                          type="date"
                          size="md"
                          borderRadius="md"
                          borderColor="gray.300"
                          _hover={{ borderColor: "gray.400" }}
                          min={new Date().toISOString().split("T")[0]}
                          h="40px"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel mb={1}>Preferred Time</FormLabel>
                        <Select
                          name="preferred_time"
                          placeholder="Select"
                          size="md"
                          borderRadius="md"
                          borderColor="gray.300"
                          _hover={{ borderColor: "gray.400" }}
                          h="40px"
                        >
                          <option value="9:00-10:00">9:00 AM - 10:00 AM</option>
                          <option value="10:00-11:00">
                            10:00 AM - 11:00 AM
                          </option>
                          <option value="11:00-12:00">
                            11:00 AM - 12:00 PM
                          </option>
                          <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
                          <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
                          <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
                        </Select>
                      </FormControl>
                    </Grid>

                    <FormControl>
                      <FormLabel mb={1}>
                        Anything specific you'd like us to cover?
                      </FormLabel>
                      <Textarea
                        name="specific_requirements"
                        placeholder="Enter your specific requirements or questions..."
                        size="md"
                        borderRadius="md"
                        borderColor="gray.300"
                        _hover={{ borderColor: "gray.400" }}
                        rows={3}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      bg="#0F2922"
                      color="white"
                      size="md"
                      width="100%"
                      borderRadius="full"
                      _hover={{ bg: "#1B4B40" }}
                      mt={2}
                      isLoading={isSubmitting}
                      loadingText="Submitting"
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
