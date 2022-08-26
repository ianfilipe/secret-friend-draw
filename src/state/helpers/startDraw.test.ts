import React from 'react'
import { startDraw } from './startDraw'

describe('On a secret friend draw', () => {
  test("Each participant don't get own name", () => {
    const participants = ['Ana', 'Ian', 'Juli', 'Guga', 'Renato', 'Olisvaldo']

    const draw = startDraw(participants)
    participants.forEach(participant => {
      const secretFriend = draw.get(participant)
      expect(secretFriend).not.toEqual(participant)
    })
  })
})
