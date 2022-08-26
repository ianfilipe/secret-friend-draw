import shuffle from 'just-shuffle'
import { useSetRecoilState } from 'recoil'
import { secretFriendResult } from '../atom'
import { useParticipantsList } from './useParticipantsList'

export const useDrawner = () => {
  const participants = useParticipantsList()
  const setResult = useSetRecoilState(secretFriendResult)
  return () => {
    const allParticipants = participants.length
    const shuffled = shuffle(participants)
    const result = new Map<string, string>()
    for (let index = 0; index < allParticipants; index++) {
      const friendIndex = index === allParticipants - 1 ? 0 : index + 1
      result.set(shuffled[index], shuffled[friendIndex])
    }
    setResult(result)
  }
}
