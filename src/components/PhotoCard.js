import React from 'react';
import { Col, Panel, Image } from 'react-bootstrap';
import './PhotoCard.css';

const PhotoCard = (props) => {
  return (
    <Col xs={12} md={3}>
    <Panel className="photocard">
      <Image src={props.photo.media.m} alt="" className="center-block" responsive />
        <span><a href={props.photo.link}>{props.photo.title}</a> by <a href={"https://www.flickr.com/photos/" + props.photo.author_id}><small>{props.photo.author.match(/"([^"]*)"/)[1]}</small></a></span>
        <p>Description: {props.photo.description.replace(/<[^>]*>/g, '')}</p>
        {props.photo.tags.length > 0 &&
        <span>Tags: {props.photo.tags}</span>
        }
    </Panel>
    </Col>
  )
}

export default PhotoCard;