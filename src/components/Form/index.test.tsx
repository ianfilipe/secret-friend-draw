import { render, screen } from '@testing-library/react'
import React from 'react'
import Form from '.'

test("When the input is empty, new participants can't be added", () => {
  render(<Form />)
  // find the input on DOM
  const input = screen.getByPlaceholderText(
    'Fill with the names of the participants'
  )
  // find the button
  const button = screen.getByRole('button')
  // ensure the input is in the document
  expect(input).toBeInTheDocument()
  // ensure the button is disabled
  expect(button).toBeDisabled()
})
