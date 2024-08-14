import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Featured({type}) {
  const [content,setContent] = useState({});

  const getFeatured = async() =>{
    try{
      const params = {
          type: type || ''
      }

      const  headers= {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQ3OGYzNTYxZGIwYjA1OWM3YThkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ0NTQ5NSwiZXhwIjoxNjk4MTczNDk1fQ.9oR3zVMFvy8L_ejWHYj0D-mkGXAVZi6OC87WmY3SMJU',
      }

      const res = await axios.get('/movies/random',{
                    params,
                    headers: headers,
      });
      
      setContent(res.data[0]);

    }catch(err){
      console.log(err)
    } 
  }

  useEffect(()=>{
    getFeatured();

  },[type]);

  
  return (
    <div className='featured'>
       
        {
          type && (
            <div className="category">
              <span>{type==='movies'?"Movies":"Series"}</span>
              <select name="genre" id="genre">
                <option value='fantasy'>Fantasy</option>
                <option value='Comedy'>Comedy</option>
                <option value='Action'>Action</option>
                <option value='Crime'>Crime</option>
                <option value='Historical'>Historical</option>
                <option value='Horror'>Horror</option>
                <option value='Adventure'>Adventure</option>
                <option value='Sci-fi'>Sci-fi</option>
                <option value='Thriller'>Thriller</option>
                <option value='Western'>Western</option>
                <option value='Animation'>Animation</option>
              </select>
            </div>
          )
        }

        <img
        src="https://tse4.mm.bing.net/th?id=OIP.rFFgvGqXBxX0k5u4Lqo6YwHaEK&pid=Api&P=0&h=220" alt="" />

        <div className="info">
            <img src="https://www.themoviedb.org/t/p/original/2lppB2UfEOoZ07WbiPVpBbhqyOg.png" alt="" />

            <span className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Eget duis at tellus at urna condimentum mattis pellentesque id. 
             Ut faucibus pulvinar elementum integer enim neque.{content.desc}</span>

             <div className="buttons">
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
             </div>
        </div>
    </div>
  )
}
