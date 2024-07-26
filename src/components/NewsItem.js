import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    // Ensure imageUrl is used correctly
    const imageSrc = imageUrl ? imageUrl : "https://media.wfaa.com/assets/WFAA/images/efed0173-8e28-4706-aa4b-1a4ef9e51651/efed0173-8e28-4706-aa4b-1a4ef9e51651_1140x641.jpg";

    return (
      <div className="card" style={{ position: 'relative' }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 1 }}>
          {source}
        </span>
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description ? description : "Click on read more"}...</p>
          <p className="card-text">
            <small className="text-muted">By {author} on {new Date(date).toGMTString()}</small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
