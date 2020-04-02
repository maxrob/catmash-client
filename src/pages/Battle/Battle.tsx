import React from 'react'
import { CatPan } from './components/CatPan'
import './Battle.css'

const FIRST_CAT: Cat = {
  _id: 'first_cat',
  avatar: 'https://66.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg',
  name: 'First Cat',
}

const SECOND_CAT: Cat = {
  _id: 'second_cat',
  avatar: 'https://66.media.tumblr.com/tumblr_lnvyrt5j1M1qce7tgo1_500.gif',
  name: 'Second Cat',
}

export const Battle = () => (
  <div className="Battle">
    <div className="Battle-content">
      <CatPan cat={FIRST_CAT} />
      <CatPan cat={SECOND_CAT} />
    </div>
    <div className="Battle-footer">
      <h1 className="Battle-title">Catmash</h1>
      <h2 className="Battle-subtitle">Battle of cats</h2>
    </div>
  </div>
)
