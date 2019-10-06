import React from 'react'

const LetraAndInfo = ({ children }) => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <div className="columns">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default LetraAndInfo
