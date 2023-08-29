import { Container } from "@mantine/core";
import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";

interface DefaultProps {
  children: React.ReactNode;
}

const Default = ({ children }: DefaultProps) => {
  return (
    <Container fluid p={0} mx={0}>
      <Navbar />
      <Container maw={1280} mih={"calc(100vh - 60px)"} fluid px={16} py={24} mx={"auto"}>
        {children}
      </Container>
    </Container>
  );
};

export default Default;
