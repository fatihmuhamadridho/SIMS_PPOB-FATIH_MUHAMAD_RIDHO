import { Avatar, BackgroundImage, Flex, Group, Image, Stack, Text, Tooltip } from "@mantine/core";
import Default from "../../components/templates/Default/Default";
import { BackgroundSaldo } from "../../assets/banners";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bannerState, useGetBanners } from "../../redux/features/bannerSlice/banner.slice";
import { servicesState, useGetServices } from "../../redux/features/servicesSlice/services.slice";
import { withAuth } from "../../components/atoms/auth/AuthProvider";

const Home = () => {
  const dispatch: any = useDispatch();
  const bannersData: bannerState = useSelector((state: any) => state.banner);
  const servicesData: servicesState = useSelector((state: any) => state.services);

  console.log({ bannersData, servicesData });

  useEffect(() => {
    dispatch(useGetBanners());
    dispatch(useGetServices());
  }, [dispatch]);

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
        <Group grow align="start">
          {servicesData?.data?.map((service, index) => (
            <Stack
              className="max-w-[100px] h-[80px] overflow-hidden"
              key={index}
              align="center"
              justify="start"
              spacing={4}
            >
              <Image src={service.service_icon} width={60} />
              <Text fz={12} align="center">
                {service.service_name}
              </Text>
            </Stack>
          ))}
        </Group>
        <Stack>
          <Text>Temukan promo menarik</Text>
          <Group>
            {bannersData?.data?.map((banner, index) => (
              <Tooltip key={index} label={banner.description} position="bottom">
                <Image src={banner.banner_image} alt={banner.banner_name} width={300} />
              </Tooltip>
            ))}
          </Group>
        </Stack>
      </Stack>
    </Default>
  );
};

export default withAuth(Home);
