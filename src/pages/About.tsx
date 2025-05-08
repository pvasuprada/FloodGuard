import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "Dhanya Bulla",
      role: "Founder",
      image: "dh.jpeg",
      description:
        "Leading FloodGuard's mission to revolutionize flood risk assessment and management in India.",
      linkedin: "https://www.linkedin.com/in/dhanya-bulla/",
    },
    // {
    //   name: "Pavan",
    //   role: "Developer",
    //   image: "/team/pavan.jpg",
    //   description:
    //     "Developer working on flood risk modeling and data visualization.",
    //   linkedin: "https://linkedin.com",
    // },
    {
      name: "Vasuprada",
      role: "GIS Developer",
      image: "/vp.jpeg",
      description:
        "Specializing in geospatial data analysis and Web GIS development for flood risk assessment.",
      linkedin: "https://www.linkedin.com/in/vasuprada-pottumuttu/",
    },
    {
      name: "Sagar",
      role: "Developer",
      image: "/sd.jpeg",
      description:
        "Full-stack developer focused on building robust flood prediction systems.",
      linkedin: "https://www.linkedin.com/in/mahisagar07/",
    },
    {
      name: "Srikanth",
      role: "Developer",
      image: "/sk.jpeg",
      description: "UX/UI Designer",
      linkedin: "https://www.linkedin.com/in/mahisagar07/",
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
            Founded in 2025, our team brings together experts in geospatial
            analysis, software development, and flood risk assessment. We
            believe that by making flood risk data more accessible and
            actionable, we can help create a more resilient future for all.
          </Text>
        </VStack>

        {/* Team Section */}
        <VStack spacing={8} align="start" mb={16}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#0F2922"
          >
            Our Team
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
                    <Link
                      href={member.linkedin}
                      isExternal
                      color="gray.600"
                      _hover={{ color: "gray.800" }}
                    >
                      <Icon as={FaLinkedin} boxSize={5} />
                    </Link>
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
