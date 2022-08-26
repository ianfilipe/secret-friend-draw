import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Footer from '.'
import { useParticipantsList } from '../../state/hook/useParticipantsList'

jest.mock('../../state/hook/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  }
})

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation,
  }
})

describe("When don't have enough participants", () => {
  beforeEach(() => (useParticipantsList as jest.Mock).mockReturnValue([]))
  test("The app can't be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})

describe('When exist enough participants', () => {
  beforeEach(() =>
    (useParticipantsList as jest.Mock).mockReturnValue([
      'Enzo',
      'Miguel',
      'Guilherme',
    ])
  )
  test('The app can be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })
  test('The app was started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(mockNavigation).toHaveBeenCalledTimes(1)
    expect(mockNavigation).toHaveBeenCalledWith('/draw')
  })
})
