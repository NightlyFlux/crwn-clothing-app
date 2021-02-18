import { Profiler } from 'react'
import Directory from '../../components/Directory'
import SHome from './styled'

const Home = () => {
  return (
    <SHome>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration })
        }}>
        <Directory />
      </Profiler>
    </SHome>
  )
}

export default Home
