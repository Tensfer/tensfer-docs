import React from "react";
import { Text } from "@chakra-ui/react";

export default function BoldText({ children }) {
  return <Text fontWeight="bold">{children}</Text>;
}
