import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <main>
        <div className='flex flex-col items-center'>
          <section className='flex flex-col items-center mt-8'>
            <h2 className='uppercase font-bold text-green-700 text-xl'>Use a FoodieBuck!</h2>
            <Link to='/available'>
              <div className='text-center rounded-lg bg-green-800 hover:bg-green-700 text-gray-200 m-4 p-4 w-48'>
                1 available
              </div>
            </Link>
            <h2 className='uppercase font-bold text-green-700 text-xl'>Used FoodieBucks</h2>
            <Link to='/history'>
              <div className='text-center rounded-lg bg-green-800 hover:bg-green-700 text-gray-200 m-4 p-4 w-48'>
                2 used
              </div>
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
