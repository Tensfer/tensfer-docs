import { Stack, Text, SimpleGrid } from "@chakra-ui/react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

// const Introduction = [
//   {
//     title: "Starting point",
//     Svg: require("@site/static/img/intro.svg").default,
//     description: "Embark on your journey from this pivotal starting point.",
//     to: "/introduction/intro",
//   },
//   {
//     title: "How Tensfer works",
//     Svg: require("@site/static/img/how_tensfer_works.svg").default,
//     description:
//       "Discover the mechanics behind the transformative power of Tensfer.",
//     to: "/introduction/intro",
//   },
//   {
//     title: "Concepts",
//     Svg: require("@site/static/img/concepts.svg").default,
//     description:
//       "Unlock the intricacies of fundamental concepts with comprehensive insights now.",
//     to: "/introduction/intro",
//   },
// ];

const GettingStarted = [
    {
        title: "Signup",
        Svg: require("@site/static/img/starting_point.svg").default,
        description:
            "Build your own app with the Tensfer dashboard, then get your API keys and start making payments.",
        to: "https://dash.tensfer.co/auth/signup",
    },
    {
        title: "Build an app",
        Svg: require("@site/static/img/concepts.svg").default,
        description: "Navigate through building an app effortlessly for optimal experience.",
        to: "/getting-started/build-an-app",
    },
    {
        title: "Get customers",
        Svg: require("@site/static/img/coins.svg").default,
        description: "Attract, engage, and onboard customers effectively with Tensfer.",
        to: "/getting-started/build-an-app",
    },
];

const APIKeys = [
    {
        title: "How to fetch API keys",
        Svg: require("@site/static/img/account_data.svg").default,
        description:
            "Learn how to create API keys from the most used wallets including Binance, Kucoin, and so on...",
        to: "api-keys/intro",
    },
];

// const Features = [
//   {
//     title: "Payment",
//     Svg: require("@site/static/img/payments.svg").default,
//     description: "Manage and streamline payments securely and efficiently.",
//     to: "/getting-started/build-an-app",
//   },
//   {
//     title: "Account Data",
//     Svg: require("@site/static/img/account_data.svg").default,
//     description:
//       "Safeguard and leverage your customers' account data for strategic insights.",
//     to: "/getting-started/build-an-app",
//   },
// ];

const DeveloperTools = [
    {
        title: "Tools overview",
        Svg: require("@site/static/img/developer_tools.svg").default,
        description:
            "Gain insight: Explore the comprehensive overview of Tensfer's essential tools.",
        to: "/getting-started/build-an-app",
    },
    {
        title: "Javascript SDK",
        Svg: require("@site/static/img/js.svg").default,
        description:
            "Harness the capabilities of the JavaScript SDK for enhanced functionality and performance.",
        to: "/getting-started/build-an-app",
    },
    {
        title: "Tensfer CLI",
        Svg: require("@site/static/img/cli.svg").default,
        description: " Utilize the Tensfer CLI for streamlined workflows and efficient management.",
        to: "/getting-started/build-an-app",
    },
];

const Community = [
    {
        title: "Support",
        Svg: require("@site/static/img/support.svg").default,
        description: "Have questions? Contact the sales team",
        to: "/getting-started/build-an-app",
    },
    {
        title: "Contact sales",
        Svg: require("@site/static/img/contact.svg").default,
        description: "Have questions? Contact the sales team",
        to: "/getting-started/build-an-app",
    },
];

const Feature = ({ Svg, title, description, to }) => {
    return (
        <Stack
            w={{ base: "100%", lg: "90%" }}
            as={Link}
            href={to}
            p={4}
            border="1px"
            borderColor="gray.300"
            borderRadius="lg"
            _hover={{
                transform: "scale(1.04)",
                boxShadow: " 0px 0px 5px 5px #eeedee",
                textDecoration: "none",
            }}
            className="box"
            transition="transform 0.3s ease">
            <Svg className={styles.featureSvg} role="img" />
            <Text fontWeight="bold" fontSize={{ base: "md", lg: "xl", "2xl": "2xl" }}>
                {title}
            </Text>
            <Text fontSize={{ base: "sm", lg: "sm", "2xl": "md" }}>{description}</Text>
        </Stack>
    );
};

export default function HomepageFeatures() {
    return (
        <Stack p={{ base: 4, lg: 0 }} maxW="1024px" mx="auto" spacing={12}>
            <Stack mt={8} p={{ base: 8, lg: 0 }}>
                <Text fontSize={{ base: "sm", lg: "lg" }}>
                    This documentation offers guides and resources to help you get up and running
                    with Tensfer.
                </Text>
            </Stack>

            <Stack mt={8} p={{ base: 8, lg: 0 }}>
                <Text
                    fontWeight="bold"
                    fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
                    color="#40b0df">
                    Getting started
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
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
                    color="#40b0df">
                    API Keys
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
                    {APIKeys.map((item) => (
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
                    color="#40b0df">
                    Developer tools
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
                    {DeveloperTools.map((item) => (
                        <Feature
                            key={item.title}
                            Svg={item.Svg}
                            title={item.title}
                            description={item.description}
                            // to={item.to}
                        />
                    ))}
                </SimpleGrid>
            </Stack>

            <Stack mt={8} mb={20} p={{ base: 8, lg: 0 }}>
                <Text
                    fontWeight="bold"
                    fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
                    color="#40b0df">
                    Community
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, lg: 0 }}>
                    {Community.map((item) => (
                        <Feature
                            key={item.title}
                            Svg={item.Svg}
                            title={item.title}
                            description={item.description}
                            // to={item.to}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Stack>
    );
}
