import React, {useState} from 'react'

// import Todos from './components/Todos/Todos'
// import User from './components/User/User'
import Dashboard from './components/Dashboard/Dashboard'

export default function App() {
  // const [showUser, setShowUser] = useState(true);
  // const handleToggleUser = () => setShowUser(prevState => !prevState);

  return (
    <>
      {/* <Todos /> */}
      {/* <button onClick={handleToggleUser}>Toggle User Component</button>
      {showUser && <User />} */}
      <Dashboard />
    </>
  )
}