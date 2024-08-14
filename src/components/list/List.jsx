import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import './list.scss';
import ListIterm from '../listIterm/ListIterm';
import { useRef, useState } from 'react';


export default function List({list}) {

  const listRef = useRef();
  const [slideNumber,setSlideNumber] = useState(0);
  const [isMoved,setIsMoved] = useState(false);

  const handleClick = direction => {
    let distance = listRef.current.getBoundingClientRect().x-50;

    setIsMoved(true);

    if(direction==='left' && slideNumber > 0){
      setSlideNumber(slideNumber-1);

      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction==='right' && slideNumber < 5){
      setSlideNumber(slideNumber+1);

      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
          {isMoved && <ArrowBackIosNewOutlined className='sliderArrow left' onClick={()=>handleClick('left')}/>}
          
          <div className="container" ref={listRef}>

            {
              list.content.map((item,index)=>(
                <ListIterm index={index} item={item} key={index}/>
              ))
            }
          </div>
          <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick('right')}/>
        </div>
    </div>
  )
}
