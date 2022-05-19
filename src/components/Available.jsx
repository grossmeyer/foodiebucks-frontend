import { Link } from 'react-router-dom'
import { FoodieBuckProfile } from '../../static/FoodieBuckProfile'

export default function Available() {
  return (
    <>
      <main>
        <div className='flex flex-col items-center'>
          <section className='flex flex-col items-center mt-8'>
            <h2 className='uppercase font-bold text-xl text-green-700'>Available FoodieBucks</h2>
            <h3 className='mt-2'>Quantity: {FoodieBuckProfile.Items[0].foodieBucksAvailable}</h3>
            <Link to='/activate'>
              <div className='text-center rounded-lg bg-green-800 hover:bg-green-700 text-gray-200 m-4 p-4 w-48'>
                Use FoodieBuck
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
