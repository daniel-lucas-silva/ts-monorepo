import { Spike } from '@ts-monorepo/core'
export const Home = () => {
  const s = new Spike('sdf')
  // const S = new Spike('this fails to compile')
  return <div>{s.message}</div>
}
export default Home
