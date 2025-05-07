import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Image,
  Text,
  HStack,
  VStack,
  IconButton,
  Link,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const FloodGuardFooter = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
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
              scenarios with precision. Whether it's zoning decisions or
              emergency planning, we empower safer infrastructure development
              and climate-resilient investments
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
            {/* <Link
              as={RouterLink}
              to="/resources"
              color="gray.700"
              _hover={{ color: "gray.900" }}
            >
              Resources
            </Link> */}
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
            {/* <Link
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
            </Link> */}
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
            <Button
              variant="link"
              color="gray.600"
              _hover={{ color: "gray.900" }}
              onClick={() => setIsTermsOpen(true)}
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              color="gray.600"
              _hover={{ color: "gray.900" }}
              onClick={() => setIsPrivacyOpen(true)}
            >
              Privacy Policy
            </Button>
            {/* <Menu>
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
            </Menu> */}
          </HStack>
        </Flex>
      </Container>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#0F2922">Privacy Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <Text fontWeight="bold">1. Information We Collect</Text>
              <UnorderedList pl={4} spacing={2}>
                <ListItem>
                  Personal information you provide to us directly
                </ListItem>
                <ListItem>Usage data and analytics</ListItem>
                <ListItem>Location data for flood risk assessment</ListItem>
                <ListItem>Device and browser information</ListItem>
              </UnorderedList>

              <Text fontWeight="bold">2. How We Use Your Information</Text>
              <UnorderedList pl={4} spacing={2}>
                <ListItem>
                  To provide and improve our flood prediction services
                </ListItem>
                <ListItem>To communicate with you about our services</ListItem>
                <ListItem>
                  To analyze and enhance the security of our platform
                </ListItem>
                <ListItem>To comply with legal obligations</ListItem>
              </UnorderedList>

              <Text fontWeight="bold">3. Data Security</Text>
              <Text>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, modification, disclosure, or destruction.
              </Text>

              <Text fontWeight="bold">4. Your Rights</Text>
              <UnorderedList pl={4} spacing={2}>
                <ListItem>Access your personal data</ListItem>
                <ListItem>Request correction of your personal data</ListItem>
                <ListItem>Request deletion of your personal data</ListItem>
                <ListItem>Object to processing of your personal data</ListItem>
              </UnorderedList>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsPrivacyOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#0F2922">Terms of Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <Text fontWeight="bold">1. Acceptance of Terms</Text>
              <Text>
                By accessing and using FloodGuard's services, you agree to be
                bound by these Terms of Service and all applicable laws and
                regulations.
              </Text>

              <Text fontWeight="bold">2. Service Description</Text>
              <Text>
                FloodGuard provides flood risk assessment and prediction
                services. While we strive for accuracy, our predictions are
                based on available data and models, and should not be the sole
                basis for critical decisions.
              </Text>

              <Text fontWeight="bold">3. User Responsibilities</Text>
              <UnorderedList pl={4} spacing={2}>
                <ListItem>Provide accurate information</ListItem>
                <ListItem>
                  Maintain the confidentiality of your account
                </ListItem>
                <ListItem>
                  Use the service in compliance with applicable laws
                </ListItem>
                <ListItem>
                  Not misuse or attempt to manipulate our systems
                </ListItem>
              </UnorderedList>

              <Text fontWeight="bold">4. Limitation of Liability</Text>
              <Text>
                FloodGuard provides information and predictions based on
                available data, but we cannot guarantee absolute accuracy. Users
                should exercise their own judgment and not rely solely on our
                services for critical decisions.
              </Text>

              <Text fontWeight="bold">5. Intellectual Property</Text>
              <Text>
                All content, features, and functionality of our services are
                owned by FloodGuard and are protected by international
                copyright, trademark, and other intellectual property laws.
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setIsTermsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FloodGuardFooter;
