import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import './navbar.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isScrolled,setIsScrolled] = useState(false);

  window.onscroll = ()=>{
      setIsScrolled(window.scrollY===0?false:true);
      return () =>(window.onscroll=null);
  }

  console.log('Navbar Rendered');

  return (
    <div className={isScrolled?'navbar scrolled':'navbar'}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />

                
                <Link to={'/'} className='link'>
                    <span>Home</span>
                </Link>
                <Link to={'/movies'} className='link'>
                    <span>Movies</span>
                </Link>
                <Link to={'/series'} className='link'>
                    <span>Series</span>
                </Link> 
                <span>Hot and New</span>
                <span>My List</span>
            </div>

            <div className="right">
                <Search className='icon'/>
                <span>KID</span>

                <Notifications className='icon'/>

                <img src="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755" alt="" />

                <div className="profile">
                  <ArrowDropDown className='icon'/>
                  <div className="options">
                    <span>Settings</span>
                    <span>Log out</span>
                  </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}
