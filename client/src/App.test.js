import { render, screen } from '@testing-library/react'
import App from './App'
import axios from 'axios'

jest.mock('axios')

test('renders learn react link', () => {
  render(<App />)
  axios.get.mockResolvedValue({ data: [] })
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
