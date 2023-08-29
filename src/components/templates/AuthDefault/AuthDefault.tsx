import { BackgroundImage, Container, Flex } from "@mantine/core";
import React from "react";
import { IllustrasiLogin } from "../../../assets/banners";

interface AuthDefaultProps {
  children: React.ReactNode;
}

const AuthDefault = ({ children }: AuthDefaultProps) => {
  return (
    <Flex>
      <Container w={"100%"} fluid p={0} mx={0}>
        {children}
      </Container>
      <BackgroundImage w={"100%"} h={"100vh"} src={IllustrasiLogin} component="div" />
    </Flex>
  );
};

export default AuthDefault;
