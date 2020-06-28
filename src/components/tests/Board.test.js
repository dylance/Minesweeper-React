import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../store'
import App from '../App'
import SelectSize from '../SelectSize'
import Board from '../Board'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={ store }>
      <Board grid={ [] } height={ 7 } width={ 7 } />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})

let wrapped

beforeEach(() => {
  wrapped = mount(
    <Provider store={ store }>
      <Board
        grid={ [
          [
            { value: '1', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
          [
            { value: '1', display: 'hidden' },
            { value: 'B', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
          [
            { value: '1', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: 'B', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
          [
            { value: '', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
          [
            { value: '', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: 'B', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
          [
            { value: '', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: 'B', display: 'hidden' },
            { value: '3', display: 'hidden' },
            { value: 'B', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
          [
            { value: '', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '2', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '1', display: 'hidden' },
            { value: '', display: 'hidden' },
          ],
        ] }
        height={ 7 }
        width={ 7 }
      />
    </Provider>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('has props of height equal to the value passed', () => {
  expect(wrapped.find(Board).prop('height')).toBe(7)
})

it('has props of width equal to the value passed', () => {
  expect(wrapped.find(Board).prop('height')).toBe(7)
})

it('has a grid prop of length equal to array passed', () => {
  expect(wrapped.find(Board).prop('grid').length).toBe(7)
})
