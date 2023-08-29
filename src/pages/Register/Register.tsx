import { Button, Center, Group, Image, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import AuthDefault from "../../components/templates/AuthDefault/AuthDefault";
import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthDefault>
      <Center h={"100%"}>
        <Stack align="center">
          <Group spacing={4}>
            <Image src={Logo} width={30} />
            <Text>SIMS PPOB</Text>
          </Group>
          <Text>Lengkapi data untuk membuat akun</Text>
          <TextInput w={"100%"} />
          <TextInput w={"100%"} />
          <TextInput w={"100%"} />
          <PasswordInput w={"100%"} />
          <PasswordInput w={"100%"} />
          <Button w={"100%"} variant="default">
            Registrasi
          </Button>
          <Text>
            sudah punya akun? login <Link to={"/login"}>disini</Link>
          </Text>
        </Stack>
      </Center>
    </AuthDefault>
  );
};

export default Register;
