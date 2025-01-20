import React, {useState} from 'react'

import Counter from './components/Counter/Counter'

export default function App() {
  const [showCounterComponent, setShowCounterComponent] = useState(true);

  const handleCounterDelete = () => setShowCounterComponent(prevState => !prevState);

  return (
    <>
      <button onClick={handleCounterDelete}>Delete counter component</button>

      {showCounterComponent && <Counter />}
    </>
  )
}