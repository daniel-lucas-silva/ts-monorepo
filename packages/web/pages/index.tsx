import { Spike } from 'models/spike'

export const Home = () => {
  const s: Spike = { message: 'test' } as Spike

  return <pre>{JSON.stringify(s)}</pre>
}
export default Home
