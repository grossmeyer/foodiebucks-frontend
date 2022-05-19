import { useParams } from 'react-router-dom'
import { getFoodieBuckDataBySk, dateFormatter } from '../lib/utils'

export default function FoodieBuck() {
  const { param } = useParams()

  const foodieBuck = getFoodieBuckDataBySk(param)

  return (
    <>
      <main>
        <div className='flex flex-col items-center m-2 p-2'>
          <section className='flex flex-col items-center border-2 bg-green-800 p-2 pb-4'>
            <h2 className='uppercase font-bold text-gray-200 mb-1'>FoodieBuck</h2>
            <div className='grid grid-cols-2 gap-2 text-center text-xs text-gray-100'>
              <div className='bg-gray-700 p-1'>Restaurant</div>
              <div className='bg-gray-700 p-1'>{foodieBuck[0].foodieBuckRestaurant}</div>
              <div className='bg-gray-700 p-1'>Amount</div>
              <div className='bg-gray-700 p-1'>${foodieBuck[0].foodieBuckAmount.toFixed(2)}</div>
              <div className='bg-gray-700 p-1'>Date</div>
              <div className='bg-gray-700 p-1'>{dateFormatter(foodieBuck[0].foodieBuckDate)}</div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
