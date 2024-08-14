import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import './home.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const params = {
          type: type || '', // Include type if it's defined
          genre: genre || '', // Include genre if it's defined
        };

        const headers = {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQ3OGYzNTYxZGIwYjA1OWM3YThkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ0NTQ5NSwiZXhwIjoxNjk4MTczNDk1fQ.9oR3zVMFvy8L_ejWHYj0D-mkGXAVZi6OC87WmY3SMJU', // Replace with your actual bearer token
        };

        const res = await axios.get('lists', {
          params,
          headers: headers, // Pass the headers as part of the request configuration
        });

        // store the data from the API response
        setLists(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type}/>
      {
        lists.map((list,index)=>(<List key={index} list={list}/>))
      }
    </div>
  );
}
