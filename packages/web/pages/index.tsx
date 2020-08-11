import { Spike } from '@ts-monorepo/core/models'
export const Home = () => {
  const s = new Spike('asd')
  return <div>{s.message}</div>
}
export default Home
