import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import axiosMock from 'axios'
import App from './App'
import { getCatsMashes, getCats, addCatPoint } from 'res/apiRoutes'

afterEach(() => jest.resetAllMocks())
jest.mock('axios')

const catMashFakeData: [Cat, Cat][] = [
  [
    {
      name: 'Cat1',
      _id: 'cat_1',
      avatar: 'fakeavatar.png',
      score: 0,
    },
    {
      name: 'Cat2',
      _id: 'cat_2',
      avatar: 'fakeavatar.png',
      score: 0,
    },
  ],
]

const leadboardFakeData: Cat[] = [
  {
    name: 'Cat1',
    _id: 'cat_1',
    avatar: 'fakeavatar.png',
    score: 1,
  },
  {
    name: 'Cat2',
    _id: 'cat_2',
    avatar: 'fakeavatar.png',
    score: 0,
  },
]

test('access to catmash route', async () => {
  const history = createMemoryHistory()

  // @ts-ignore
  axiosMock.get.mockResolvedValueOnce({
    data: catMashFakeData,
  })

  // @ts-ignore
  axiosMock.post.mockResolvedValueOnce({
    data: {},
  })

  const { getByTestId, getAllByTestId } = render(
    <Router history={history}>
      >
      <App />
    </Router>
  )

  const catMashNavLink = await waitForElement(() =>
    getByTestId('nav-catmash-link')
  )
  const catMashLinks = await waitForElement(() =>
    getAllByTestId('catmash-link')
  )

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(getCatsMashes(100))
  expect(catMashNavLink).toHaveClass('active')
  expect(catMashLinks).toHaveLength(2)

  fireEvent.click(catMashLinks[0])

  expect(axiosMock.post).toHaveBeenCalledTimes(1)
  expect(axiosMock.post).toHaveBeenCalledWith(
    addCatPoint(catMashFakeData[0][0]._id)
  )
})

test('access to leadboard route', async () => {
  const history = createMemoryHistory()

  // @ts-ignore
  axiosMock.get.mockResolvedValueOnce({
    data: catMashFakeData,
  })

  // @ts-ignore
  axiosMock.post.mockResolvedValueOnce({
    data: {},
  })

  const { getByTestId, getAllByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  )

  // @ts-ignore
  axiosMock.get.mockResolvedValueOnce({
    data: leadboardFakeData,
  })

  fireEvent.click(getByTestId('nav-leadboard-link'))

  const leadboardNavLink = await waitForElement(() =>
    getByTestId('nav-leadboard-link')
  )
  const catLine = await waitForElement(() => getAllByTestId('cat-line'))

  expect(axiosMock.get).toHaveBeenCalledTimes(2)
  expect(axiosMock.get).toHaveBeenCalledWith(getCatsMashes(100))
  expect(axiosMock.get).toHaveBeenCalledWith(getCats())
  expect(leadboardNavLink).toHaveClass('active')
  expect(catLine).toHaveLength(2)
})
