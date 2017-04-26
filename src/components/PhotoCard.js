import React from 'react';
import './PhotoCard.css';


const PhotoCard = (props) => {
  return (
    <div className="photocard">
        <img src={props.photo.media.m} alt=""/>
        <span><a href={props.photo.link}>{props.photo.title}</a> by <a href={"https:\/\/www.flickr.com\/photos\/" + props.photo.author_id}><small>{props.photo.author.match(/"([^"]*)"/)[1]}</small></a></span>
        <p>Description: {props.photo.description.replace(/<[^>]*>/g, '')}</p>
        {props.photo.tags.length > 0 &&
        <span>Tags: {props.photo.tags}</span>
        }
    </div>
  )
}

export default PhotoCard;