import React from 'react'

export const Error = ({ mensaje }) => (
  <article class="message is-danger is-large">
    <div class="message-header" style={{ justifyContent: 'center' }}>
      <p role="img" aria-label="emoji">
        {mensaje} 🤦‍♀️
      </p>
    </div>
  </article>
)
