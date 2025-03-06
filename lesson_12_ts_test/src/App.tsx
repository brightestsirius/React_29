import React from 'react'

import Accordion from './components/Accordion/Accordion'
import UsersList from './components/Users/UsersList'

export default function App() {
  return (
    <>
      <Accordion title="Some title">
        <p>Some description</p>
      </Accordion>
      
      <UsersList />
    </>
  )
}