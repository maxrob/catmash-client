import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import { CatLine } from './index'
import '@testing-library/jest-dom/extend-expect'

const cat: Cat = {
  name: 'Cat1',
  _id: 'cat_1',
  avatar: 'fakeavatar.png',
  score: 0,
}

const position = 1

test('display one cat line from leadboard', async () => {
  const { getByTestId } = render(<CatLine cat={cat} position={position} />)

  const catLine = await waitForElement(() => getByTestId('cat-line'))

  expect(catLine.children[0].textContent).toContain(`#${position}`)
  // @ts-ignore
  expect(catLine.children[1].style.backgroundImage).toContain(
    `url(${cat.avatar})`
  )
  expect(catLine.children[2].textContent).toContain(`${cat.name}`)
  expect(catLine.children[3].textContent).toContain(`${cat.score}`)
})
