import Default from "../../components/templates/Default/Default";
import {
  Avatar,
  BackgroundImage,
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { BackgroundSaldo } from "../../assets/banners";

const TopUp = () => {
  return (
    <Default>
      <Stack>
        <Flex w={"100%"}>
          <Stack w={"100%"} spacing={0}>
            <Avatar size={50} />
            <Text>Selamat Datang</Text>
            <Text>Kristanto Wibowo</Text>
          </Stack>
          <BackgroundImage w={"100%"} p={16} radius={12} src={BackgroundSaldo}>
            <Text>Saldo anda</Text>
            <Text>RP ******</Text>
            <Text>Lihat Saldo</Text>
          </BackgroundImage>
        </Flex>
        <Stack>
          <Text>Silahkan masukkan</Text>
          <Text>Nominal Top Up</Text>
        </Stack>
        <Flex align={"end"} gap={24}>
          <Stack w={"100%"}>
            <TextInput />
            <Button>Top Up</Button>
          </Stack>
          <SimpleGrid w={"100%"} cols={3}>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
            <Button>Rp10.000</Button>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Default>
  );
};

export default TopUp;
