import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link,
  Icon,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaPhone, FaAmbulance, FaFileAlt, FaList } from "react-icons/fa";

interface ResourceCard {
  title: string;
  description: string;
  icon: any;
  action?: {
    label: string;
    href: string;
  };
}

const emergencyContacts: ResourceCard[] = [
  {
    title: "Emergency Hotline",
    description: "Call 911 for immediate emergency assistance",
    icon: FaPhone,
    action: {
      label: "Call Now",
      href: "tel:911",
    },
  },
  {
    title: "Medical Services",
    description:
      "Contact local medical facilities for non-emergency medical assistance",
    icon: FaAmbulance,
    action: {
      label: "View Contacts",
      href: "#medical-services",
    },
  },
];

const floodResources: ResourceCard[] = [
  {
    title: "Flood Preparation Guide",
    description:
      "Learn how to prepare your home and family for potential flooding",
    icon: FaFileAlt,
    action: {
      label: "Download Guide",
      href: "#flood-guide",
    },
  },
  {
    title: "Emergency Kit Checklist",
    description:
      "Essential items to include in your emergency preparedness kit",
    icon: FaList,
    action: {
      label: "View Checklist",
      href: "#emergency-kit",
    },
  },
];

const ResourceCard = ({ resource }: { resource: ResourceCard }) => {
  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="sm"
      _hover={{ boxShadow: "md" }}
    >
      <Stack spacing={4}>
        <Icon as={resource.icon} boxSize={8} color="blue.500" />
        <Heading size="md">{resource.title}</Heading>
        <Text color="gray.600">{resource.description}</Text>
        {resource.action && (
          <Button
            as={Link}
            href={resource.action.href}
            colorScheme="blue"
            size="sm"
            width="fit-content"
          >
            {resource.action.label}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

const Resources = () => {
  return (
    <Box pt="90px">
      <Container maxW="container.xl">
        <Stack spacing={10}>
          <Box>
            <Heading size="lg" mb={6}>
              Emergency Contacts
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {emergencyContacts.map((contact, index) => (
                <ResourceCard key={index} resource={contact} />
              ))}
            </SimpleGrid>
          </Box>

          <Box>
            <Heading size="lg" mb={6}>
              Flood Resources
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {floodResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Resources;
