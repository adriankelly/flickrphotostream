import React from 'react';
import { Col, Panel, Image } from 'react-bootstrap';
import './PhotoCard.css';
import Truncate from 'react-truncate';

const PhotoCard = (props) => {

  return (
    <Col xs={12} md={3}>
      
    <Panel className="photocard">
      
      <Image src={props.photo.media.m} alt="" className="center-block" responsive />
      
        <span><a href={props.photo.link} className="photocard__title">
          <Truncate ellipsis={<span>... </span>}>
          {props.photo.title}
          </Truncate>
          </a> by <a href={"https://www.flickr.com/photos/" + props.photo.author_id}><small>{props.photo.author.match(/"([^"]*)"/)[1]}</small></a></span>
        


        <p className="photocard__description"><strong>Description:</strong>
      <Truncate lines={2} ellipsis={<span>... </span>}>
        {props.photo.description.replace(/<[^>]*>/g, '')}
        </Truncate>
        </p>
        
                    

        {props.photo.tags.length > 0 &&
        <p><strong>Tags:</strong> 
        <Truncate ellipsis={<span>... </span>}>
        {props.photo.tags.split(' ').map((tag, index) => {
          return (
            <span key={index}>{tag}, </span>
          )
        })}
        

        </Truncate>
        </p>
        }
        
    </Panel>
    
    </Col>
  )
}

export default PhotoCard;