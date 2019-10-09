import React from 'react'

export const Container = ({ children }) => (
  <div className="container">
    <section className="hero">
      <div className="hero-body">
        <div className="container ">{children}</div>
      </div>
    </section>
  </div>
)
