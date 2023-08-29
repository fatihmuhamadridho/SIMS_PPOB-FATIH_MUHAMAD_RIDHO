import { useNavigate } from "react-router-dom";
import Default from "../../components/templates/Default/Default";
import { Avatar, Button, Container, Stack, Text, TextInput } from "@mantine/core";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate("/login");
  };

  return (
    <Default>
      <Container maw={600} p={0}>
        <Stack align="center">
          <Avatar size={150} />
          <Text>Kristanto Wibowo</Text>
          <TextInput w={"100%"} label="Email" />
          <TextInput w={"100%"} label="Nama Depan" />
          <TextInput w={"100%"} label="Nama Belakang" />
          <Button w={"100%"}>Edit Profil</Button>
          <Button w={"100%"} onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Container>
    </Default>
  );
};

export default Profile;
