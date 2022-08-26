import shuffle from 'just-shuffle'

export function startDraw(participants: string[]) {
  const allParticipants = participants.length
  const shuffled = shuffle(participants)
  const result = new Map<string, string>()
  for (let index = 0; index < allParticipants; index++) {
    const friendIndex = index === allParticipants - 1 ? 0 : index + 1
    result.set(shuffled[index], shuffled[friendIndex])
  }
  return result
}
