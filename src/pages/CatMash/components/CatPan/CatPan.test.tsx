import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import { CatPan } from './index'
import '@testing-library/jest-dom/extend-expect'

jest.mock('axios')

const cat: Cat = {
  name: 'Cat2',
  _id: 'cat_2',
  avatar: 'fakeavatar.png',
  score: 0,
}

test('access to catmash route', async () => {
  const { getByTestId } = render(<CatPan cat={cat} />)

  const catMashLink = await waitForElement(() => getByTestId('catmash-link'))

  // @ts-ignore
  expect(catMashLink.children[0].style.backgroundImage).toContain(
    `url(${cat.avatar})`
  )
})
