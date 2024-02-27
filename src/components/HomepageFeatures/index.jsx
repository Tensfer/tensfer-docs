import { Box, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Introduction = [
  {
    title: "Starting point",
    Svg: require("@site/static/img/intro.svg").default,
    description: "Embark on your journey from this pivotal starting point.",
    to: "/getstarted/intro",
  },
  {
    title: "How Tensfer works",
    Svg: require("@site/static/img/how_tensfer_works.svg").default,
    description:
      "Discover the mechanics behind the transformative power of Tensfer.",
    to: "/getstarted/intro",
  },
  {
    title: "Concepts",
    Svg: require("@site/static/img/concepts.svg").default,
    description:
      "Unlock the intricacies of fundamental concepts with comprehensive insights now.",
    to: "/getstarted/intro",
  },
];

const GettingStarted = [
  {
    title: "Signup",
    Svg: require("@site/static/img/starting_point.svg").default,
    description: "Join the community: Sign up right now",
    to: "/getstarted/intro",
  },
  {
    title: "Onboarding",
    Svg: require("@site/static/img/onboarding.svg").default,
    description:
      "Navigate through onboarding effortlessly for optimal experience.",
    to: "/getstarted/intro",
  },
  {
    title: "Get customers",
    Svg: require("@site/static/img/coins.svg").default,
    description:
      "Attract, engage, and onboard customers effectively with Tensfer.",
    to: "/getstarted/intro",
  },
];

const Features = [
  {
    title: "Payment",
    Svg: require("@site/static/img/payments.svg").default,
    description: "Manage and streamline payments securely and efficiently.",
    to: "/getstarted/intro",
  },
  {
    title: "Account Data",
    Svg: require("@site/static/img/account_data.svg").default,
    description:
      "Safeguard and leverage your customers' account data for strategic insights.",
    to: "/getstarted/intro",
  },
];

const DeveloperTools = [
  {
    title: "Tools overview",
    Svg: require("@site/static/img/developer_tools.svg").default,
    description:
      "Gain insight: Explore the comprehensive overview of Tensfer's essential tools.",
    to: "/getstarted/intro",
  },
  {
    title: "Javascript SDK",
    Svg: require("@site/static/img/js.svg").default,
    description:
      "Harness the capabilities of the JavaScript SDK for enhanced functionality and performance.",
    to: "/getstarted/intro",
  },
  {
    title: "Tensfer CLI",
    Svg: require("@site/static/img/cli.svg").default,
    description:
      " Utilize the Tensfer CLI for streamlined workflows and efficient management.",
    to: "/getstarted/intro",
  },
];

const Community = [
  {
    title: "Support",
    Svg: require("@site/static/img/support.svg").default,
    description: "Have questions? Contact the sales team",
    to: "/getstarted/intro",
  },
  {
    title: "Contact sales",
    Svg: require("@site/static/img/contact.svg").default,
    description: "Have questions? Contact the sales team",
    to: "/getstarted/intro",
  },
];

const Feature = ({ Svg, title, description, to }) => {
  return (
    <Box
      w="320px"
      as={Link}
      to={to}
      p={4}
      border="1px"
      borderRadius="lg"
      _hover={{ transform: "scale(1.04)" }}
      transition="transform 0.3s ease"
    >
      <Stack w="100%" p={0} boxShadow="sm">
        <Svg className={styles.featureSvg} role="img" />
        <Text
          fontWeight="bold"
          fontSize={{ base: "md", lg: "xl", "2xl": "2xl" }}
        >
          {title}
        </Text>
        <Text fontSize={{ base: "sm", lg: "sm", "2xl": "md" }}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

export default function HomepageFeatures() {
  return (
    <Stack
      p={{ base: 4, lg: 0 }}
      maxW="1024px"
      mx="auto"
      spacing={12}
    >
      <Stack mt={8} p={{ base: 8, lg: 0 }}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
        >
          Introduction
        </Text>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
          {Introduction.map((item) => (
            <Feature
              key={item.title}
              Svg={item.Svg}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </SimpleGrid>
      </Stack>

      <Stack mt={8} p={{ base: 8, lg: 0 }}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
        >
          Getting started
        </Text>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
          {GettingStarted.map((item) => (
            <Feature
              key={item.title}
              Svg={item.Svg}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </SimpleGrid>
      </Stack>

      <Stack mt={8} p={{ base: 8, lg: 0 }}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
        >
          Features
        </Text>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
          {Features.map((item) => (
            <Feature
              key={item.title}
              Svg={item.Svg}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </SimpleGrid>
      </Stack>

      <Stack mt={8} p={{ base: 8, lg: 0 }}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
        >
          Developer tools
        </Text>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
          {DeveloperTools.map((item) => (
            <Feature
              key={item.title}
              Svg={item.Svg}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </SimpleGrid>
      </Stack>

      <Stack mt={8} p={{ base: 8, lg: 0 }}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
        >
          Community
        </Text>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
          {Community.map((item) => (
            <Feature
              key={item.title}
              Svg={item.Svg}
              title={item.title}
              description={item.description}
              to={item.to}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
