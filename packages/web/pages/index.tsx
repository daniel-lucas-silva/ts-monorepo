import { Spike } from '@ts-monorepo/core'

export const Home = () => {
  // this shouldn't work
  const s = new Spike('asd')
  return <div>{s.message}</div>
}
export default Home
