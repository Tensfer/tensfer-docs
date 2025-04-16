import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "@docusaurus/Link";

const footerLinks = [
  {
    title: "Getting started",
    to: "/getting-started/overview",
  },
  {
    title: "Products",
    to: "/getting-started/products",
  },
  {
    title: "Use cases",
    to: "/getting-started/use-cases",
  },
  {
    title: "Blog",
    to: "https://medium.com/@tensferHQ/",
  },
];

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  
  return (
    <Stack className="footer" spacing={6} py={6} px={4} borderTop="1px solid #eaeaea">
      <Flex 
        justifyContent="space-between" 
        alignItems="center" 
        maxWidth="1200px" 
        mx="auto" 
        width="100%"
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: 6, md: 0 }}
      >
        <Flex gap={6} justifyContent="center">
          {footerLinks.map((item, index) => (
            <Text 
              key={index}
              as={Link} 
              to={item.to} 
              fontWeight="semibold"
              fontSize="md"
              _hover={{ textDecoration: "none", color: "#0066cc" }}
            >
              {item.title}
            </Text>
          ))}
        </Flex>
        
        <Flex gap={4} justifyContent="center" alignItems="center">
          <a href="https://twitter.com/tensfer_hq" aria-label="Twitter">
            <Box 
              as="img"
              src={require("@site/static/img/x.png").default}
              alt="x logo"
              width={5}
              height={5}
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            />
          </a>
          <a href="https://github.com/Tensfer/tensfer-docs" aria-label="GitHub">
            <Box 
              as="img"
              src={require("@site/static/img/github.png").default}
              alt="github logo"
              width={5}
              height={5}
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            />
          </a>
        </Flex>
      </Flex>

      <Text 
        align="center" 
        fontWeight="semibold"
        fontSize="sm"
        color="gray.600"
        mt={2}
      >
        Made with ❤️ by Tensfer
      </Text>
    </Stack>
  );
}

export default React.memo(Footer);