import { Avatar, BackgroundImage, Center, Flex, Group, Stack, Text } from "@mantine/core";
import Default from "../../components/templates/Default/Default";
import { BackgroundSaldo } from "../../assets/banners";

const Transaction = () => {
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
          <Text>Semua Transaksi</Text>
          <Group>
            <Text>Maret</Text>
            <Text>Mei</Text>
            <Text>Juni</Text>
            <Text>Juli</Text>
            <Text>Agustus</Text>
            <Text>September</Text>
          </Group>
          <Center h={"50vh"}>
            <Text>Maaf tidak ada histori transaksi hari ini</Text>
          </Center>
        </Stack>
      </Stack>
    </Default>
  );
};

export default Transaction;
