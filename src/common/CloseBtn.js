import React from 'react'

export default function CloseBtn({ className, onClick }) {
  return (
    <div className={`btn btn-glitch btn-close ${className}`} onClick={onClick}>
      <span />
      <span />
    </div>
  )
}
