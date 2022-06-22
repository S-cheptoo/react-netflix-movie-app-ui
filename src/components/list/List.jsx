import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React from 'react';
import { useRef, useState } from 'react';
import "./list.scss";
import ListItem from "../listItem/ListItem";

export default function List() {
  
  //restricting the slider to the available items per row
  const [slideNumber, setSlideNumber] = useState(0)
  //state to onlyshow the left slider on clicking the right slider
  const [isMoved, setIsMoved] = useState(false)

  //to select the elemnt by its id, we use useRef hook
  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x -50
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  return (
      <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick={ ()=> handleClick("right")}/>
      </div>
    </div>
  )
}
