import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listIterm.scss"
import { useEffect, useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListIterm({index,item}) {

  const [isHovered,setIsHovered] = useState(false);
  const [movie,setMovie] = useState({});
  //const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" 

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(`/movies/find/${item}`, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTQ3OGYzNTYxZGIwYjA1OWM3YThkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjQ0NTQ5NSwiZXhwIjoxNjk4MTczNDk1fQ.9oR3zVMFvy8L_ejWHYj0D-mkGXAVZi6OC87WmY3SMJU', // Replace with actual bearer token
          },
        });
        setMovie(response.data);
      } catch (err) {
        console.error(err);
      }
    };
  
    // Call getMovie when the component mounts by using an empty dependency array
    getMovie();
  },[item]);
  

  return (
    <Link to='/watch' state={{movie: movie}}>
      <div 
        className="listIterm"
        style={{left: isHovered && (index * 225 - 50) + (index * 2.5)}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={()=>setIsHovered(false)}
      >
        <img src={movie.img} alt="movie" />


        {isHovered && 
          <>
            <video src={movie.trailer} autoPlay={true} loop muted/>

            <div className="itermInfo">
              <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
              </div>

              <div className="info">
                <span>1 hour 14 minutes</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span> 
              </div>

              <div className="desc">{movie.desc}</div>

              <div className="genre">{movie.genre}</div>
            </div>
          </>
        }
          
      </div>
    </Link>
  )
}
