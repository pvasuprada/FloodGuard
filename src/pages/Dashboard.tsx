import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Dashboard = () => {
  useEffect(() => {
    // Initialize map
    const map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Cleanup
    return () => {
      map.remove();
    };
  }, []);

  return (
    <Box pt="90px">
      <Container maxW="container.xl">
        <Stack spacing={6}>
          <Heading size="lg">Flood Monitoring Dashboard</Heading>

          <Grid templateColumns={{ base: "1fr", lg: "3fr 1fr" }} gap={6}>
            {/* Map */}
            <Card>
              <CardBody>
                <Box id="map" height="500px" />
              </CardBody>
            </Card>

            {/* Flood Data */}
            <Stack spacing={4}>
              <Card>
                <CardBody>
                  <Stack>
                    <Heading size="md">Current Status</Heading>
                    <Text>Risk Level: Low</Text>
                    <Text>Last Updated: {new Date().toLocaleString()}</Text>
                  </Stack>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <Stack>
                    <Heading size="md">Recent Alerts</Heading>
                    <Text>No active alerts</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
