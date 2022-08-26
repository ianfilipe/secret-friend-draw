import { useNavigate } from 'react-router-dom'
import { useParticipantsList } from '../../state/hook/useParticipantsList'

function Footer() {
  const participants = useParticipantsList()

  const navigateTo = useNavigate()

  const start = () => {
    navigateTo('/draw')
  }

  return (
    <footer>
      <button onClick={start} disabled={participants.length < 3}>
        Start
      </button>
    </footer>
  )
}

export default Footer
