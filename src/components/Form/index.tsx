import { useRef, useState } from 'react'
import { useAddParticipant } from '../../state/hook/useAddParticipant'
import { useErrorMessage } from '../../state/hook/useErrorMessage'

function Form() {
  const [name, setName] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const addParticipantOnList = useAddParticipant()

  const errorMessage = useErrorMessage()

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addParticipantOnList(name)
    setName('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={addParticipant}>
      <input
        ref={inputRef}
        value={name}
        onChange={event => setName(event.target.value)}
        type="text"
        placeholder="Fill with the names of the participants"
      ></input>
      <button disabled={!name}>Add</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  )
}

export default Form
