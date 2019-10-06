import React from 'react'
const SectionForm = ({ children }) => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </section>
  )
}

export default SectionForm
