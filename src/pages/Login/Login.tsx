import { Button, Center, Group, Image, PasswordInput, Stack, Text, TextInput } from "@mantine/core";
import AuthDefault from "../../components/templates/AuthDefault/AuthDefault";
import { Logo } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { loginPostState, postLogin } from "../../redux/features/authSlice/login.slice";
import { useDispatch, useSelector } from "react-redux";
import { withoutAuth } from "../../components/atoms/auth/AuthProvider";
import { useAuth } from "../../components/atoms/auth/AuthContext";

const Login = () => {
  const { onLogin } = useAuth();
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const loginData = useSelector((state: any) => state.login);

  console.log({ loginData });

  const handleLogin = async (values: loginPostState) => {
    try {
      const response = await dispatch(postLogin(values));
      if (response.meta.requestStatus === "fulfilled") {
        onLogin();
        alert(response.payload.message);
        navigate("/");
      }
    } catch (error: any) {
      alert(error.stack);
    }
  };

  return (
    <AuthDefault>
      <Center h={"100%"}>
        <Formik
          initialValues={{ email: "user@nutech-integrasi.com", password: "abcdef1234" }}
          onSubmit={(values: loginPostState) => handleLogin(values)}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Stack align="center">
                <Group spacing={4}>
                  <Image src={Logo} width={30} />
                  <Text>SIMS PPOB</Text>
                </Group>
                <Text>Masuk atau buat akun untuk memulai</Text>
                <TextInput
                  w={"100%"}
                  placeholder="Masukkan email Anda"
                  onChange={e => setFieldValue("email", e.target.value)}
                  value={values.email}
                />
                <PasswordInput
                  w={"100%"}
                  autoComplete="on"
                  placeholder="Masukkan password Anda"
                  onChange={e => setFieldValue("password", e.target.value)}
                  value={values.password}
                />
                <Button w={"100%"} variant="default" type="submit">
                  Masuk
                </Button>
                <Text>
                  belum punya akun? registrasi <Link to={"/register"}>disini</Link>
                </Text>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </AuthDefault>
  );
};

export default withoutAuth(Login);
