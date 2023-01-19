import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import Card from './components/Card'
import CardNew from './components/CardNew';
import { Button } from '@chakra-ui/react';

function App() {
  const [users, setUsers] = useState([]);
  const [changeStyle, setChangeStyle] = useState(1)

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (

    <ChakraProvider>

      <div>
        <Button colorScheme='teal' variant='outline' onClick={() => setChangeStyle(2)}>Altere os cards</Button>
      </div>

      <div>
        <Button colorScheme='teal' variant='outline' onClick={() => setChangeStyle(1)}>Voltar card</Button>
      </div>

      {changeStyle === 1 ? users.map((user) => {
        return (
          <Card key={user.id} name={user.name} username={user.username} email={user.email} id={user.id} number={Math.random()} />
        )
      }) : users.map((user) => {
        return (
          <CardNew key={user.id} name={user.name} username={user.username} email={user.email} id={user.id} number={Math.random()} />
        )
      })
      }

    </ChakraProvider>
    
  );
}

export default App
