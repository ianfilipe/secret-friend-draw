import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { RecoilRoot } from 'recoil'
import Form from '.'

describe('The form component behavior', () => {
  test("When the input is empty, new participants can't be added", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
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

  test('Add a new participant if a name is filled in', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
    // find the input on DOM
    const input = screen.getByPlaceholderText(
      'Fill with the names of the participants'
    )
    // find the button
    const button = screen.getByRole('button')
    // fill input with a value
    fireEvent.change(input, {
      target: {
        value: 'Enzo Miguel',
      },
    })
    // click on submit button
    fireEvent.click(button)
    // ensure the input has active focus
    expect(input).toHaveFocus()
    // ensure the input don't have a value
    expect(input).toHaveValue('')
  })

  test("Duplicated names can't be added to list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
    const input = screen.getByPlaceholderText(
      'Fill with the names of the participants'
    )
    const button = screen.getByRole('button')
    fireEvent.change(input, {
      target: {
        value: 'Enzo Miguel',
      },
    })
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Enzo Miguel',
      },
    })
    fireEvent.click(button)

    const errorMessage = screen.getByRole('alert')
    expect(errorMessage.textContent).toBe("Duplicated names aren't allowed!")
  })

  test('Error message should disappear after timers', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
    const input = screen.getByPlaceholderText(
      'Fill with the names of the participants'
    )
    const button = screen.getByRole('button')
    fireEvent.change(input, {
      target: {
        value: 'Enzo Miguel',
      },
    })
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Enzo Miguel',
      },
    })
    fireEvent.click(button)

    let errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeNull()
  })
})
