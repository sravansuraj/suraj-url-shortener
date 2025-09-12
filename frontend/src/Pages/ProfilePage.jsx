import React, { useEffect, useState } from 'react';
import Service from '../utils/http';
import { Center, Text, useMantineTheme, Container, Avatar } from '@mantine/core';

const obj = new Service();

export default function ProfilePage() {
  const [user, setUser] = useState({});
  const theme = useMantineTheme();

  const getProfillePageData = async () => {
    try {
      const data = await obj.get('user/me');
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfillePageData();
  }, []);

  const gradient = `linear-gradient(90deg, ${theme.colors.blue[6]} 0%, ${theme.colors.grape[6]} 50%, ${theme.colors.pink[5]} 100%)`;

  return (
    <div>
      <Center style={{ height: "60vh" }}>
        <Container
          size="lg"
          style={{
            background: "#a5d8ff",
            borderRadius: "20px",
            paddingTop: "35px",
            paddingBottom: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Center style={{ height: "182px" }}>
            <Avatar src="https://suraj-url-shortener.onrender.com" size={132} />
          </Center>

          <Center>
            <Text
              size="xl"
              fw={900}
              style={{ background: gradient, WebkitBackgroundClip: "text", color: "transparent" }}
            >
              {user?.name}
            </Text>
          </Center>

          <Center>
            <Text size="xl" fw={900} variant="gradient" gradient={{ from: 'indigo', to: 'rgba(49, 80, 84, 1)', deg: 90 }}>
              Email : {user?.email}
            </Text>
          </Center>

          <Center>
            <Text fw={700}>Id : {user?._id}</Text>
          </Center>

          <Center>
            <Text fw={700}>CreatedAt : {user?.createdAt}</Text>
          </Center>
        </Container>
      </Center>
    </div>
  );
}
