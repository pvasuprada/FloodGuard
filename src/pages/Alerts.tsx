import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Badge,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

interface Alert {
  id: number;
  severity: "low" | "medium" | "high";
  title: string;
  description: string;
  timestamp: string;
}

const mockAlerts: Alert[] = [
  {
    id: 1,
    severity: "high",
    title: "Flash Flood Warning",
    description:
      "Heavy rainfall expected in the next 24 hours. Prepare for possible flooding.",
    timestamp: "2024-03-20T10:00:00Z",
  },
  {
    id: 2,
    severity: "medium",
    title: "River Level Rising",
    description:
      "River water levels are above normal. Monitor the situation closely.",
    timestamp: "2024-03-20T09:30:00Z",
  },
  {
    id: 3,
    severity: "low",
    title: "Weather Advisory",
    description: "Light to moderate rain expected throughout the day.",
    timestamp: "2024-03-20T08:00:00Z",
  },
];

const AlertItem = ({ alert }: { alert: Alert }) => {
  const severityColors = {
    low: "green",
    medium: "orange",
    high: "red",
  };

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      width="100%"
      _hover={{ bg: useColorModeValue("gray.50", "gray.700") }}
    >
      <VStack align="stretch" spacing={2}>
        <HStack justify="space-between">
          <Heading size="sm">{alert.title}</Heading>
          <Badge colorScheme={severityColors[alert.severity]}>
            {alert.severity.toUpperCase()}
          </Badge>
        </HStack>
        <Text color={useColorModeValue("gray.600", "gray.300")}>
          {alert.description}
        </Text>
        <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
          {new Date(alert.timestamp).toLocaleString()}
        </Text>
      </VStack>
    </Box>
  );
};

const Alerts = () => {
  return (
    <Box pt="90px">
      <Container maxW="container.lg">
        <VStack spacing={6} align="stretch">
          <Heading size="lg">Flood Alerts</Heading>
          <Divider />
          <VStack spacing={4} align="stretch">
            {mockAlerts.map((alert) => (
              <AlertItem key={alert.id} alert={alert} />
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Alerts;
