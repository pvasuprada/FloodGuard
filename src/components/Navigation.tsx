import {
  Box,
  Flex,
  Link,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    // If already on home page, scroll to demo section
    if (location.pathname === "/") {
      const demoSection = document.getElementById("demo-section");
      demoSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If on another page, navigate to home and then scroll to demo
      navigate("/", { state: { scrollToDemo: true } });
    }
  };

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="white"
      borderBottom="1px"
      borderColor="gray.100"
      zIndex="1000"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        h="60px"
        alignItems="center"
        justifyContent="space-between"
      >
        <RouterLink to="/">
          <Box display="flex" alignItems="center" gap={2}>
            <Image
              h="40px"
              src="/logo.png"
              alt="FloodGuard Logo"
              fallbackSrc="https://via.placeholder.com/150x50?text=FloodGuard"
            />
            <Image
              h="10px"
              src="/logotext.png"
              alt="FloodGuard Logo"
              fallbackSrc="https://via.placeholder.com/150x50?text=FloodGuard"
            />
          </Box>
        </RouterLink>

        <Flex gap={8} alignItems="center">
          <Link
            as={RouterLink}
            to="/"
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            _hover={{ color: "darkgreen.700" }}
          >
            Home
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              fontSize="md"
              fontWeight="medium"
              color="gray.700"
              _hover={{ color: "darkgreen.700" }}
            >
              Services <ChevronDownIcon />
            </MenuButton>
            <MenuList
              bg="darkgreen.800"
              borderColor="darkgreen.800"
              py={2}
              boxShadow="lg"
            >
              <MenuItem
                as={RouterLink}
                to="/services/governments"
                color="white"
                bg="transparent"
                _hover={{ bg: "darkgreen.700" }}
              >
                Governments & Urban Planners
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/businesses"
                color="white"
                bg="transparent"
                _hover={{ bg: "darkgreen.700" }}
              >
                Businesses
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/insurance"
                color="white"
                bg="transparent"
                _hover={{ bg: "darkgreen.700" }}
              >
                Insurance & Financial Institutions
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/communities"
                color="white"
                bg="transparent"
                _hover={{ bg: "darkgreen.700" }}
              >
                Communities & Individuals
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/education"
                color="white"
                bg="transparent"
                _hover={{ bg: "darkgreen.700" }}
              >
                Educational & Research Institutions
              </MenuItem>
            </MenuList>
          </Menu>
          {/* <Link
            as={RouterLink}
            to="/resources"
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            _hover={{ color: "darkgreen.700" }}
          >
            Resources
          </Link> */}
          <Link
            as={RouterLink}
            to="/about"
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            _hover={{ color: "darkgreen.700" }}
          >
            About Us
          </Link>
          {/* <Link
            as={RouterLink}
            to="/faqs"
            fontSize="md"
            fontWeight="medium"
            color="gray.700"
            _hover={{ color: "darkgreen.700" }}
          >
            FAQs
          </Link> */}
          <Button
            bg="darkgreen.800"
            color="white"
            px={6}
            _hover={{ bg: "darkgreen.700" }}
            borderRadius="full"
            onClick={handleDemoClick}
          >
            Watch a Demo
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
