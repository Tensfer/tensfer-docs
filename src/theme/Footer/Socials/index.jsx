import { Flex, Icon } from "@chakra-ui/react";
import Link from "@docusaurus/Link";
import React from "react";
import x from "../../../../static/img/coins.svg";
export default function FooterSocials({ socials }) {
  return (
    <Flex gap={6}>
      {socials.map((social) => {
        <Icon as={Link} src={social.icon} to={social.to} />;
      })}
    </Flex>
  );
}
