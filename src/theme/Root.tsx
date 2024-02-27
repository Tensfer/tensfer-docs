import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

// Default implementation, that you can customize
export default function Root({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
