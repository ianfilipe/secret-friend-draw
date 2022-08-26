import { useRecoilValue } from 'recoil'
import { participantsListState } from '../atom'

export const useParticipantsList = () => {
  return useRecoilValue(participantsListState)
}
