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
        title: "Tensfer intro",
        Svg: require("@site/static/img/starting_point.svg").default,
        description:
            "What makes Tensfer unique and why should you care",
        to: "/getting-started/overview",
    },
    {
        title: "Product",
        Svg: require("@site/static/img/concepts.svg").default,
        description: "Learn the exiciting preoducts about Tensfer",
        to: "/getting-started/products",
    },
    {
        title: "Use cases",
        Svg: require("@site/static/img/coins.svg").default,
        description: "Learn ways Tensfer can best suit your products",
        to: "/getting-started/use-cases",
    },
];

// const APIKeys = [
//     {
//         title: "How to fetch API keys",
//         Svg: require("@site/static/img/account_data.svg").default,
//         description:
//             "Learn how to create API keys from the most used wallets including Binance, Kucoin, and so on...",
//         to: "api-keys/intro",
//     },
// ];

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
        title: "Security",
        Svg: require("@site/static/img/developer_tools.svg").default,
        description:
            "Learn about Tensfer's security architecture",
        to: "/getting-started/security",
    },
    {
        title: "Javascript SDK",
        Svg: require("@site/static/img/js.svg").default,
        description:
            "Use the Tensfer Javascript SDK to on your product today.",
        to: "/getting-started/go-live/test-your-app",
    },
    // {
    //     title: "Tensfer CLI",
    //     Svg: require("@site/static/img/cli.svg").default,
    //     description: "Test and try out incredible actions using the Tensfer CLI on sandbox",
    //     to: "/getting-started/build-an-app",
    // },
];

// const Community = [
//     {
//         title: "Support",
//         Svg: require("@site/static/img/support.svg").default,
//         description: "Have questions? Contact the sales team",
//         to: "/getting-started/build-an-app",
//     },
//     {
//         title: "Contact sales",
//         Svg: require("@site/static/img/contact.svg").default,
//         description: "Have questions? Contact the sales team",
//         to: "/getting-started/build-an-app",
//     },
// ];

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
                Explore comprehensive guides, developer tools, and resources to innovate on Tensfer.
                </Text>
            </Stack>

            <Stack mt={8} p={{ base: 8, lg: 0 }}>
                <Text
                    fontWeight="bold"
                    fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
                    color="#40b0df">
                    Explore Tensfer
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

            {/* <Stack mt={8} p={{ base: 8, lg: 0 }}>
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
            </Stack> */}

            <Stack mt={8} mb={20} p={{ base: 8, lg: 0 }}>
                <Text
                    fontWeight="bold"
                    fontSize={{ base: "lg", lg: "3xl", "2xl": "4xl" }}
                    color="#40b0df">
                    Other toolings
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

            {/* <Stack mt={8} mb={20} p={{ base: 8, lg: 0 }}>
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
            </Stack> */}
        </Stack>
    );
}
