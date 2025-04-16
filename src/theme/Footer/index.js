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
    <Stack className="footer" spacing={6} p={4}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://twitter.com/tensfer_hq">
          <img
            src={require("@site/static/img/x.png").default}
            alt="x logo"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://github.com/Tensfer/tensfer-docs"
          style={{ marginLeft: "10px" }}
        >
          <img
            src={require("@site/static/img/github.png").default}
            alt="github logo"
            width={20}
            height={20}
          />
        </a>
      </div>

      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={8}
        justifyContent="space-evenly"
      >
        {footerLinks.map((item) => (
          <Text as={Link} to={item.to} fontWeight="semibold">
            {item.title}
          </Text>
        ))}
      </Flex>

      <Text align="center" fontWeight="semibold">
        Made with ❤️ by Tensfer
      </Text>
    </Stack>
  );
}
export default React.memo(Footer);
