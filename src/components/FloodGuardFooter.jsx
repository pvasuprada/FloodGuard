import React from "react";
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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const FloodGuardFooter = () => {
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
  );
};

export default FloodGuardFooter;
