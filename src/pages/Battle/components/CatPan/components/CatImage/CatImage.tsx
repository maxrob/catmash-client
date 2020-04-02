import React from 'react'
import './CatImage.css'

export const CatImage = ({ cat }: { cat: Cat }) => {
  const handleClick = () => {
    alert(cat._id)
  }

  return (
    // eslint-disable-next-line
    <a onClick={handleClick}>
      <div
        className="Cat-Image-content"
        style={{ backgroundImage: `url(${cat.avatar})` }}
      />
    </a>
  )
}
