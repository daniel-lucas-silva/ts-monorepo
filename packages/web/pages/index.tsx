import { Spike } from 'models/spike'

export const Home = () => {
  const s: Spike = {
    message: 'good',
  }
  return <pre>{JSON.stringify(s.message)}</pre>
}
export default Home
