import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Flex,
  Link,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Aditya Sharma",
      role: "Founder & CEO",
      image: "/team/aditya.jpg",
      description:
        "PhD in Climate Science from IIT Delhi. 10+ years experience in flood risk assessment and climate modeling.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Priya Patel",
      role: "Chief Technology Officer",
      image: "/team/priya.jpg",
      description:
        "Former Tech Lead at Google. Expert in AI/ML and geospatial data analysis.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of Research",
      image: "/team/rajesh.jpg",
      description:
        "15+ years in hydrological modeling. Previously with National Water Institute.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      image: "/team/sarah.jpg",
      description:
        "Specialist in climate-tech products. Previously led projects at Climate Analytics Corp.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Arjun Reddy",
      role: "Head of Operations",
      image: "/team/arjun.jpg",
      description:
        "10+ years experience in scaling climate-tech startups across South Asia.",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ];

  return (
    <Box pt="120px" pb={20}>
      <Container maxW="container.xl">
        {/* Mission Section */}
        <VStack spacing={8} align="start" mb={16}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color="#0F2922"
          >
            About FloodGuard
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" lineHeight="tall">
            At FloodGuard, we're on a mission to revolutionize flood risk
            assessment and management in India. By combining cutting-edge
            technology with deep expertise in climate science, we help
            communities, businesses, and governments build resilience against
            flooding.
          </Text>
          <Text fontSize="lg" color="gray.600" maxW="3xl" lineHeight="tall">
            Founded in 2023, our team brings together experts in climate
            science, artificial intelligence, and urban planning. We believe
            that by making flood risk data more accessible and actionable, we
            can help create a more resilient future for all.
          </Text>
        </VStack>

        {/* Team Section */}
        <VStack spacing={8} align="start" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#0F2922"
          >
            Meet Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {teamMembers.map((member) => (
              <Box
                key={member.name}
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
              >
                <VStack spacing={4} align="center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="200px"
                    objectFit="cover"
                  />
                  <VStack spacing={2} align="center">
                    <Heading
                      as="h3"
                      fontSize="xl"
                      color="#0F2922"
                      textAlign="center"
                    >
                      {member.name}
                    </Heading>
                    <Text
                      color="#1B4B40"
                      fontWeight="medium"
                      textAlign="center"
                    >
                      {member.role}
                    </Text>
                    <Text
                      color="gray.600"
                      fontSize="sm"
                      textAlign="center"
                      minH="60px"
                    >
                      {member.description}
                    </Text>
                    <HStack spacing={4} pt={2}>
                      <Link
                        href={member.linkedin}
                        isExternal
                        color="gray.600"
                        _hover={{ color: "gray.800" }}
                      >
                        <Icon as={FaLinkedin} boxSize={5} />
                      </Link>
                      <Link
                        href={member.twitter}
                        isExternal
                        color="gray.600"
                        _hover={{ color: "gray.800" }}
                      >
                        <Icon as={FaTwitter} boxSize={5} />
                      </Link>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Values Section */}
        <VStack spacing={8} align="start">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#0F2922"
          >
            Our Values
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
              <VStack align="start" spacing={3}>
                <Heading as="h3" fontSize="xl" color="#0F2922">
                  Innovation
                </Heading>
                <Text color="gray.600">
                  We leverage cutting-edge technology and data science to
                  provide accurate, actionable flood risk insights.
                </Text>
              </VStack>
            </Box>
            <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
              <VStack align="start" spacing={3}>
                <Heading as="h3" fontSize="xl" color="#0F2922">
                  Impact
                </Heading>
                <Text color="gray.600">
                  Every decision we make is guided by our commitment to creating
                  meaningful change in flood resilience.
                </Text>
              </VStack>
            </Box>
            <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
              <VStack align="start" spacing={3}>
                <Heading as="h3" fontSize="xl" color="#0F2922">
                  Integrity
                </Heading>
                <Text color="gray.600">
                  We maintain the highest standards of scientific rigor and
                  transparency in our work.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
