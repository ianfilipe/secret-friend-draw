import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { RecoilRoot } from 'recoil'
import Draw from '.'
import { useDrawResult } from '../../state/hook/useDrawResult'
import { useParticipantsList } from '../../state/hook/useParticipantsList'

jest.mock('../../state/hook/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  }
})

jest.mock('../../state/hook/useDrawResult', () => {
  return {
    useDrawResult: jest.fn(),
  }
})

describe('The Draw page', () => {
  const participants = ['Enzo', 'Miguel', 'Guilherme']
  const result = new Map([
    ['Enzo', 'Miguel'],
    ['Miguel', 'Guilherme'],
    ['Guilherme', 'Enzo'],
  ])
  beforeEach(() =>
    (useParticipantsList as jest.Mock).mockReturnValue(participants)
  )

  beforeEach(() => (useDrawResult as jest.Mock).mockReturnValue(result))

  test('All participants can see their secret friend', () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    )
    const options = screen.queryAllByRole('option')
    expect(options).toHaveLength(participants.length + 1)
  })
  test('The secret friend show when requested', () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    )
    const select = screen.getByPlaceholderText('Select your name')
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    })
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const secretFriend = screen.getByRole('alert')
    expect(secretFriend).toBeInTheDocument()
  })
})
