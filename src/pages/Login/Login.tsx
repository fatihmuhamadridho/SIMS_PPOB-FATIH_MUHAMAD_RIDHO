import { Button, Center, Group, Image, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import AuthDefault from "../../components/templates/AuthDefault/AuthDefault";
import { Logo } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate("/");
  };

  return (
    <AuthDefault>
      <Center h={"100%"}>
        <Stack align="center">
          <Group spacing={4}>
            <Image src={Logo} width={30} />
            <Text>SIMS PPOB</Text>
          </Group>
          <Text>Masuk atau buat akun untuk memulai</Text>
          <TextInput w={"100%"} />
          <PasswordInput w={"100%"} />
          <Button w={"100%"} variant="default" onClick={handleLogin}>
            Masuk
          </Button>
          <Text>
            belum punya akun? registrasi <Link to={"/register"}>disini</Link>
          </Text>
        </Stack>
      </Center>
    </AuthDefault>
  );
};

export default Login;
