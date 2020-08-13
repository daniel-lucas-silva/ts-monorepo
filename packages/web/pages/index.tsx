import { Spike } from '@ts-monorepo/core/models/spike'
import { experiment } from '@ts-monorepo/leaf'

export const Home = () => {
  const exp = experiment()
  const s: Spike = { message: 'sdfsdf' } as Spike
  return (
    <div>
      {s.message} {exp}
    </div>
  )
}
export default Home
