import { atom } from 'recoil'

export const participantsListState = atom<string[]>({
  key: 'participantsListState',
  default: [],
})

export const secretFriendResult = atom<Map<string, string>>({
  key: 'secretFriendResult',
  default: new Map(),
})

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
})
