import { useParticipantsList } from '../../state/hook/useParticipantsList'

function ParticipantsList() {
  const participants: string[] = useParticipantsList()
  return (
    <ul>
      {participants.map(participant => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  )
}

export default ParticipantsList
