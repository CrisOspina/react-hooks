import React from 'react'

const Img = ({ imagen }) => {
  const { largeImageURL, likes, previewURL, tags, views } = imagen

  return (
    <div className="column is-3">
      <div className="card box">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={previewURL} alt={tags} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="title is-5 is-pulled-left">❤ {likes} </div>
              <div className="title is-5 is-pulled-right">👁 {views}</div>
            </div>
          </div>
          <div className="content">
            <a
              href={largeImageURL}
              target="_blank"
              rel="noopener noreferrer"
              className="button is-light is-normal is-fullwidth is-inverted is-outlined"
            >
              {' '}
              Ver imagen Full HD
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Img
