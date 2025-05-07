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
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      boxShadow="sm"
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
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: 0,
              width: "0%",
              height: "2px",
              backgroundColor: "#0F2922",
              transition: "width 0.3s ease",
            }}
            _hover={{
              color: "#0F2922",
              _after: {
                width: "100%",
              },
            }}
          >
            Home
          </Link>
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              as={Button}
              variant="ghost"
              fontSize="md"
              fontWeight="medium"
              color="gray.700"
              rightIcon={<ChevronDownIcon />}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              position="relative"
              _hover={{
                //color: "#0F2922",
                bg: "transparent",
              }}
              _active={{
                bg: "transparent",
              }}
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: isOpen ? "100%" : "0%",
                height: "2px",
                //backgroundColor: "#0F2922",
                transition: "width 0.3s ease",
              }}
            >
              Services
            </MenuButton>
            <MenuList
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              bg="white"
              border="none"
              py={2}
              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              borderRadius="lg"
              mt={2}
            >
              <MenuItem
                as={RouterLink}
                to="/services/governments"
                color="gray.700"
                bg="transparent"
                _hover={{
                  bg: "#F7FAFC",
                  color: "#0F2922",
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                }}
                fontSize="sm"
                py={3}
                px={6}
              >
                Governments & Urban Planners
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/businesses"
                color="gray.700"
                bg="transparent"
                _hover={{
                  bg: "#F7FAFC",
                  color: "#0F2922",
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                }}
                fontSize="sm"
                py={3}
                px={6}
              >
                Businesses
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/insurance"
                color="gray.700"
                bg="transparent"
                _hover={{
                  bg: "#F7FAFC",
                  color: "#0F2922",
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                }}
                fontSize="sm"
                py={3}
                px={6}
              >
                Insurance & Financial Institutions
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/communities"
                color="gray.700"
                bg="transparent"
                _hover={{
                  bg: "#F7FAFC",
                  color: "#0F2922",
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                }}
                fontSize="sm"
                py={3}
                px={6}
              >
                Communities & Individuals
              </MenuItem>
              <MenuItem
                as={RouterLink}
                to="/services/education"
                color="gray.700"
                bg="transparent"
                _hover={{
                  bg: "#F7FAFC",
                  color: "#0F2922",
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                }}
                fontSize="sm"
                py={3}
                px={6}
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
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: 0,
              width: "0%",
              height: "2px",
              backgroundColor: "#0F2922",
              transition: "width 0.3s ease",
            }}
            _hover={{
              color: "#0F2922",
              _after: {
                width: "100%",
              },
            }}
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
            bg="#0F2922"
            color="white"
            px={6}
            _hover={{ bg: "#1B4B40" }}
            borderRadius="full"
            onClick={handleDemoClick}
            fontSize="md"
          >
            Watch a Demo
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navigation;
