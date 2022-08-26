import { useRecoilValue } from 'recoil'
import { secretFriendResult } from '../atom'

export const useDrawResult = () => {
  return useRecoilValue(secretFriendResult)
}
