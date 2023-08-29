import { BackgroundImage, Container, Flex } from "@mantine/core";
import React from "react";
import { IllustrasiLogin } from "../../../assets/banners";

interface AuthDefaultProps {
  children: React.ReactNode;
}

const AuthDefault = ({ children }: AuthDefaultProps) => {
  return (
    <Flex>
      <Container className="z-10 bg-white h-[100vh]" w={"100%"} fluid mx={0}>
        {children}
      </Container>
      <BackgroundImage
        // className="absolute"
        w={"100%"}
        h={"100vh"}
        src={IllustrasiLogin}
        component="div"
      />
    </Flex>
  );
};

export default AuthDefault;
