import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkgreen: {
      700: "#1B4B40",
      800: "#0F2922",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
      },
      defaultProps: {
        colorScheme: "darkgreen",
      },
    },
    Stack: {
      defaultProps: {
        spacing: 4,
      },
    },
    VStack: {
      defaultProps: {
        spacing: 4,
      },
    },
    SimpleGrid: {
      defaultProps: {
        spacing: 4,
      },
    },
  },
});

export default theme;
