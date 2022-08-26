import { useState } from 'react'
import { useDrawResult } from '../../state/hook/useDrawResult'
import { useParticipantsList } from '../../state/hook/useParticipantsList'

function Draw() {
  const participants = useParticipantsList()

  const [actualParticipant, setActualParticipant] = useState('')
  const [secretFriend, setSecretFriend] = useState('')

  const result = useDrawResult()

  const draw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (result.has(actualParticipant)) {
      setSecretFriend(result.get(actualParticipant)!)
    }
  }
  return (
    <section>
      <form onSubmit={draw}>
        <select
          required
          name="actualParticipant"
          id="actualParticipant"
          placeholder="Select your name"
          value={actualParticipant}
          onChange={event => setActualParticipant(event.target.value)}
        >
          <option>Select your name</option>
          {participants.map(participant => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <button>Draw</button>
      </form>
      {secretFriend && <p role="alert">{secretFriend}</p>}
    </section>
  )
}

export default Draw
