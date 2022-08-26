import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import ParticipantsList from '.'
import { useParticipantsList } from '../../state/hook/useParticipantsList'

jest.mock('../../state/hook/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  }
})

describe('The ParticipantsList component behavior with a empty list', () => {
  beforeEach(() => (useParticipantsList as jest.Mock).mockReturnValue([]))
  test('Should be render without elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(0)
  })
})

describe('The ParticipantsList component behavior with a filled list', () => {
  const participants = ['Enzo', 'Miguel']
  beforeEach(() =>
    (useParticipantsList as jest.Mock).mockReturnValue(participants)
  )
  test('Should be render with elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(participants.length)
  })
})
