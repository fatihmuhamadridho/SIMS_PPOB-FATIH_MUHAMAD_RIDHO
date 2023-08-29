import { Container, Flex, Group, Header, Image, Text } from "@mantine/core";
import { Logo } from "../../../assets/images";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Header height={60}>
      <Container maw={1280} h={"100%"} fluid>
        <Flex h={"100%"} align={"center"} justify={"space-between"}>
          <Link to={"/"}>
            <Group spacing={8}>
              <Image src={Logo} width={30} />
              <Text>SIMS PPOB</Text>
            </Group>
          </Link>
          <Group spacing={24}>
            <Link to={"/"}>
              <Text>Beranda</Text>
            </Link>
            <Link to={"/top-up"}>
              <Text>Top Up</Text>
            </Link>
            <Link to={"/transaction"}>
              <Text>Transaction</Text>
            </Link>
            <Link to={"/profile"}>
              <Text>Akun</Text>
            </Link>
          </Group>
        </Flex>
      </Container>
    </Header>
  );
};

export default Navbar;
