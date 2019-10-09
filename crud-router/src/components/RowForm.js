import React from 'react'

export const RowForm = ({ children }) => (
  <div className="container">
    <div className="columns">
      <div className="column is-offset-4 is-4">{children}</div>
    </div>
  </div>
)
