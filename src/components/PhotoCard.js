import React from 'react';
import { Col, Panel, Image } from 'react-bootstrap';
import './PhotoCard.css';

const PhotoCard = (props) => {

  const truncate = (s, num) => {
    if (s.length > num) {
      return s.slice(0, num) + '...';
    }
    else {
      return s;
    }
  }

  return (
    <Col xs={12} md={3}>
      <Panel className="photocard">
        
        <Image
          src={props.photo.media.m}
          alt=""
          className="center-block"
          responsive
        />

        <span>
          <a href={props.photo.link} className="photocard__title">
              {truncate(props.photo.title, 24)}
          </a> by
          <a href={"https://www.flickr.com/photos/" + props.photo.author_id}>
            <small> {props.photo.author.match(/"([^"]*)"/)[1]}</small>
          </a>
        </span>

        <p className="photocard__description">
          <strong>Description:</strong>
            {truncate((props.photo.description.replace(/<[^>]*>/g, '').replace(/:\s*$/gm,'')), 40)}
        </p>

        {props.photo.tags.length > 0 &&
          <p>
            <strong>Tags:</strong> 
              {props.photo.tags.split(' ').splice(0, 3).map((tag, index) => {
                return (
                    <span key={index}> {tag}, </span> 
                )
              })}
          </p>
        }
        
      </Panel>
    </Col>
  )
}

export default PhotoCard;