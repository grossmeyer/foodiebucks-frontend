import FoodieBuckForm from './FoodieBuckForm'

export default function Activate() {
  return (
    <>
      <main>
        <div className='flex flex-col items-center'>
          <section className='flex flex-col items-center mt-8'>
            <h2 className='uppercase font-bold text-xl text-green-700'>Enter FoodieBuck Info</h2>
            <FoodieBuckForm />
          </section>
        </div>
      </main>
    </>
  )
}
