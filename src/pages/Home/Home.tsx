import { Avatar, BackgroundImage, Flex, Group, Image, Stack, Text } from "@mantine/core";
import Default from "../../components/templates/Default/Default";
import {
  Pbb,
  Listrik,
  Pulsa,
  Pdam,
  Pgn,
  Televisi,
  Musik,
  Game,
  VoucherMakanan,
  Kurban,
  Zakat,
  PaketData,
} from "../../assets/images";
import { BackgroundSaldo, Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../assets/banners";

const Home = () => {
  const listIcon = [
    {
      name: "PBB",
      image: Pbb,
    },
    {
      name: "Listrik",
      image: Listrik,
    },
    {
      name: "Pulsa",
      image: Pulsa,
    },
    {
      name: "Pdam",
      image: Pdam,
    },
    {
      name: "Pgn",
      image: Pgn,
    },
    {
      name: "Televisi",
      image: Televisi,
    },
    {
      name: "Musik",
      image: Musik,
    },
    {
      name: "Game",
      image: Game,
    },
    {
      name: "VoucherMakanan",
      image: VoucherMakanan,
    },
    {
      name: "Kurban",
      image: Kurban,
    },
    {
      name: "Zakat",
      image: Zakat,
    },
    {
      name: "PaketData",
      image: PaketData,
    },
  ];

  const listBanner = [Banner1, Banner2, Banner3, Banner4, Banner5];

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
        <Group grow>
          {listIcon.map((icon, index) => (
            <Stack key={index} align="center" spacing={4}>
              <Image src={icon.image} width={60} />
              <Text>{icon.name}</Text>
            </Stack>
          ))}
        </Group>
        <Stack>
          <Text>Temukan promo menarik</Text>
          <Group>
            {listBanner.map(banner => (
              <Image src={banner} width={300} />
            ))}
          </Group>
        </Stack>
      </Stack>
    </Default>
  );
};

export default Home;
