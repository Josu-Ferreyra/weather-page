import { useState } from 'react'
import { useSelector } from 'react-redux'
import CurrentMain from '../pures/CurrentMain'
import CurrentReverse from '../pures/CurrentReverse'

function Current ({ current }) {
  const city = useSelector(state => state.city)
  const [reverse, setReverse] = useState(false)

  return (
    <div className={`current ${reverse ? 'reverse' : ''}`}>
      <CurrentMain
        reverse={reverse}
        city={city}
        current={current}
        setReverse={setReverse}
      />
      <CurrentReverse
        current={current}
        reverse={reverse}
        setReverse={setReverse}
      />
    </div>
  )
}

export default Current
