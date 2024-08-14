import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.scss'
import { Link, Navigate, useLocation } from 'react-router-dom';

export default function Watch() {

  const {state} = useLocation();
 
  const movie = state?.movie;
 
  // console.log(movie);
  return (
    <>
      {movie?
        <div className='watch'>
          <Link to="/">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </Link>
            <video src={movie.trailer} className='video' autoPlay progress controls/>
        </div>
      :<Navigate to={'/login'}/>
      }
   </>
  )
}
