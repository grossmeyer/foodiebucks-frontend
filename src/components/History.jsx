import { Link, Outlet } from 'react-router-dom'
import { FoodieBuckData as FoodieBucks } from '../../static/FoodieBuckData'
import { dateFormatter, paramBuilder } from '../lib/utils'

export default function History() {
  return (
    <>
      <main>
        <Outlet />
        <section className='flex flex-col items-center mt-8'>
          <h2 className='uppercase font-bold text-green-700'>Used Foodiebucks</h2>
          <ul>
            {FoodieBucks.Items.map(({ sk, foodieBuckRestaurant, foodieBuckDate }) => (
              <li key={sk}>
                <Link to={`/history/${paramBuilder(sk)}`}>
                  <div className='text-center bg-green-800 hover:bg-green-700 text-gray-200 m-4 p-4 w-48 rounded-lg'>
                    <p className='mb-1'>{foodieBuckRestaurant}</p>
                    <p className='text-xs'>{dateFormatter(foodieBuckDate)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
