import React from 'react';
import './PhotoCard.css';


const PhotoCard = (props) => {
  return (
    <div className="photocard">
        <img src={props.photo.media.m} alt=""/>
        <span><a href="">{props.photo.title}</a> by <a href=""><small>{props.photo.author.match(/"([^"]*)"/)[1]}</small></a></span>
        <p>Description: {props.photo.description.replace(/<[^>]*>/g, '')}</p>
        <span>Tags: {props.photo.tags}</span>
    </div>
  )
}

export default PhotoCard;