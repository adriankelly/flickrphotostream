import React from 'react';
import './PhotoCard.css';


const PhotoCard = (props) => {
  return (
    <div className="photocard">
        <img src="https://dummyimage.com/140x110/ccc/000.jpg" alt=""/>
        <span><a href="">Title</a> by <a href=""><small>AuthorFirst AuthorLast</small></a></span>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex unde ad dicta, pariatur, fugiat facilis hic ullam rerum repellendus accusamus cumque aut quidem dolores, voluptate provident dignissimos impedit asperiores quaerat.</p>
        <span>Tags: voluptate provident dignissimos impedit asperiores quaerat</span>
    </div>
  )
}

export default PhotoCard;