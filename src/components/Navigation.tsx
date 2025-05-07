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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue,
  Text,
  Collapse,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  HamburgerIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const { isOpen: isMobileServicesOpen, onToggle: onMobileServicesToggle } =
    useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleDemoClick = () => {
    if (location.pathname === "/") {
      const demoSection = document.getElementById("demo-section");
      demoSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToDemo: true } });
    }
    if (isDrawerOpen) onDrawerClose();
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const isActiveService = (path: string) => {
    return location.pathname.startsWith(path);
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
          <Box
            display="flex"
            alignItems="center"
            gap={3}
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.2s"
          >
            <Image
              h={{ base: "40px", md: "45px" }}
              src="/logo.png"
              alt="FloodGuard Logo"
              objectFit="contain"
            />
            <Image
              h={{ base: "12px", md: "14px" }}
              src="/logotext.png"
              alt="FloodGuard Text"
              objectFit="contain"
            />
          </Box>
        </RouterLink>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Flex gap={8} alignItems="center">
            <Link
              as={RouterLink}
              to="/"
              fontSize="md"
              fontWeight="medium"
              color={isActiveLink("/") ? "#0F2922" : "gray.700"}
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: isActiveLink("/") ? "100%" : "0%",
                height: "2px",
                backgroundColor: "#0F2922",
                transition: "width 0.3s ease",
              }}
              _hover={{
                color: "#0F2922",
                _after: { width: "100%" },
              }}
            >
              Home
            </Link>
            <Menu isOpen={isMenuOpen} onClose={onMenuClose}>
              <MenuButton
                as={Button}
                variant="ghost"
                fontSize="md"
                fontWeight="medium"
                color={isActiveService("/services") ? "#0F2922" : "gray.700"}
                rightIcon={<ChevronDownIcon />}
                onMouseEnter={onMenuOpen}
                onMouseLeave={onMenuClose}
                position="relative"
                _hover={{ bg: "transparent", color: "#0F2922" }}
                _active={{ bg: "transparent" }}
                _after={{
                  content: '""',
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  width: isActiveService("/services") ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "#0F2922",
                  transition: "width 0.3s ease",
                }}
              >
                Services
              </MenuButton>
              <MenuList
                onMouseEnter={onMenuOpen}
                onMouseLeave={onMenuClose}
                bg="white"
                border="none"
                py={2}
                boxShadow="lg"
                borderRadius="xl"
                mt={2}
                minW="280px"
              >
                <MenuItem
                  as={RouterLink}
                  to="/services/governments"
                  color={
                    isActiveService("/services/governments")
                      ? "#0F2922"
                      : "gray.700"
                  }
                  bg={
                    isActiveService("/services/governments")
                      ? "#F7FAFC"
                      : "transparent"
                  }
                  _hover={{
                    bg: "#F7FAFC",
                    color: "#0F2922",
                    transform: "translateX(4px)",
                  }}
                  fontSize="sm"
                  py={3}
                  px={6}
                  transition="all 0.2s"
                >
                  Governments & Urban Planners
                </MenuItem>
                <MenuItem
                  as={RouterLink}
                  to="/services/businesses"
                  color={
                    isActiveService("/services/businesses")
                      ? "#0F2922"
                      : "gray.700"
                  }
                  bg={
                    isActiveService("/services/businesses")
                      ? "#F7FAFC"
                      : "transparent"
                  }
                  _hover={{
                    bg: "#F7FAFC",
                    color: "#0F2922",
                    transform: "translateX(4px)",
                  }}
                  fontSize="sm"
                  py={3}
                  px={6}
                  transition="all 0.2s"
                >
                  Businesses
                </MenuItem>
                <MenuItem
                  as={RouterLink}
                  to="/services/insurance"
                  color={
                    isActiveService("/services/insurance")
                      ? "#0F2922"
                      : "gray.700"
                  }
                  bg={
                    isActiveService("/services/insurance")
                      ? "#F7FAFC"
                      : "transparent"
                  }
                  _hover={{
                    bg: "#F7FAFC",
                    color: "#0F2922",
                    transform: "translateX(4px)",
                  }}
                  fontSize="sm"
                  py={3}
                  px={6}
                  transition="all 0.2s"
                >
                  Insurance & Financial Institutions
                </MenuItem>
                <MenuItem
                  as={RouterLink}
                  to="/services/communities"
                  color={
                    isActiveService("/services/communities")
                      ? "#0F2922"
                      : "gray.700"
                  }
                  bg={
                    isActiveService("/services/communities")
                      ? "#F7FAFC"
                      : "transparent"
                  }
                  _hover={{
                    bg: "#F7FAFC",
                    color: "#0F2922",
                    transform: "translateX(4px)",
                  }}
                  fontSize="sm"
                  py={3}
                  px={6}
                  transition="all 0.2s"
                >
                  Communities & Individuals
                </MenuItem>
                <MenuItem
                  as={RouterLink}
                  to="/services/education"
                  color={
                    isActiveService("/services/education")
                      ? "#0F2922"
                      : "gray.700"
                  }
                  bg={
                    isActiveService("/services/education")
                      ? "#F7FAFC"
                      : "transparent"
                  }
                  _hover={{
                    bg: "#F7FAFC",
                    color: "#0F2922",
                    transform: "translateX(4px)",
                  }}
                  fontSize="sm"
                  py={3}
                  px={6}
                  transition="all 0.2s"
                >
                  Educational & Research Institutions
                </MenuItem>
              </MenuList>
            </Menu>
            <Link
              as={RouterLink}
              to="/about"
              fontSize="md"
              fontWeight="medium"
              color={isActiveLink("/about") ? "#0F2922" : "gray.700"}
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: 0,
                width: isActiveLink("/about") ? "100%" : "0%",
                height: "2px",
                backgroundColor: "#0F2922",
                transition: "width 0.3s ease",
              }}
              _hover={{
                color: "#0F2922",
                _after: { width: "100%" },
              }}
            >
              About Us
            </Link>
            <Button
              bg="#0F2922"
              color="white"
              px={6}
              py={5}
              _hover={{ bg: "#1B4B40", transform: "translateY(-1px)" }}
              _active={{ transform: "translateY(0)" }}
              borderRadius="full"
              onClick={handleDemoClick}
              fontSize="md"
              transition="all 0.2s"
              boxShadow="sm"
            >
              Watch a Demo
            </Button>
          </Flex>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon boxSize={6} />}
            variant="ghost"
            onClick={onDrawerOpen}
            _hover={{ bg: "gray.100" }}
          />
        )}
      </Flex>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader borderBottomWidth="1px" px={6}>
            Menu
          </DrawerHeader>
          <DrawerBody px={6}>
            <VStack spacing={6} align="stretch" mt={6}>
              <Link
                as={RouterLink}
                to="/"
                fontSize="lg"
                fontWeight="medium"
                color={isActiveLink("/") ? "#0F2922" : "gray.700"}
                onClick={onDrawerClose}
                _hover={{ color: "#0F2922" }}
              >
                Home
              </Link>
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={onMobileServicesToggle}
                  cursor="pointer"
                  _hover={{ color: "#0F2922" }}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="medium"
                    color={
                      isActiveService("/services") ? "#0F2922" : "gray.700"
                    }
                  >
                    Services
                  </Text>
                  <ChevronRightIcon
                    boxSize={6}
                    transform={isMobileServicesOpen ? "rotate(90deg)" : "none"}
                    transition="transform 0.2s"
                  />
                </Flex>
                <Collapse in={isMobileServicesOpen}>
                  <VStack spacing={4} pl={4} mt={4} align="stretch">
                    <Link
                      as={RouterLink}
                      to="/services/governments"
                      fontSize="md"
                      color={
                        isActiveService("/services/governments")
                          ? "#0F2922"
                          : "gray.600"
                      }
                      onClick={onDrawerClose}
                      _hover={{ color: "#0F2922", pl: 2 }}
                      transition="all 0.2s"
                    >
                      Governments & Urban Planners
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/services/businesses"
                      fontSize="md"
                      color={
                        isActiveService("/services/businesses")
                          ? "#0F2922"
                          : "gray.600"
                      }
                      onClick={onDrawerClose}
                      _hover={{ color: "#0F2922", pl: 2 }}
                      transition="all 0.2s"
                    >
                      Businesses
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/services/insurance"
                      fontSize="md"
                      color={
                        isActiveService("/services/insurance")
                          ? "#0F2922"
                          : "gray.600"
                      }
                      onClick={onDrawerClose}
                      _hover={{ color: "#0F2922", pl: 2 }}
                      transition="all 0.2s"
                    >
                      Insurance & Financial Institutions
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/services/communities"
                      fontSize="md"
                      color={
                        isActiveService("/services/communities")
                          ? "#0F2922"
                          : "gray.600"
                      }
                      onClick={onDrawerClose}
                      _hover={{ color: "#0F2922", pl: 2 }}
                      transition="all 0.2s"
                    >
                      Communities & Individuals
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/services/education"
                      fontSize="md"
                      color={
                        isActiveService("/services/education")
                          ? "#0F2922"
                          : "gray.600"
                      }
                      onClick={onDrawerClose}
                      _hover={{ color: "#0F2922", pl: 2 }}
                      transition="all 0.2s"
                    >
                      Educational & Research Institutions
                    </Link>
                  </VStack>
                </Collapse>
              </Box>
              <Link
                as={RouterLink}
                to="/about"
                fontSize="lg"
                fontWeight="medium"
                color={isActiveLink("/about") ? "#0F2922" : "gray.700"}
                onClick={onDrawerClose}
                _hover={{ color: "#0F2922" }}
              >
                About Us
              </Link>
              <Button
                bg="#0F2922"
                color="white"
                px={6}
                py={6}
                _hover={{ bg: "#1B4B40" }}
                borderRadius="full"
                onClick={() => {
                  handleDemoClick();
                  onDrawerClose();
                }}
                fontSize="md"
                mt={4}
                boxShadow="sm"
              >
                Watch a Demo
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navigation;
