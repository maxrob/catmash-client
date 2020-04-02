import React from 'react'
import { CatImage } from './components/CatImage'
import './CatPan.css'

export const CatPan = ({ cat }: { cat: Cat }) => (
  <div className="Cat-Pan-content">
    <CatImage cat={cat} />
  </div>
)
