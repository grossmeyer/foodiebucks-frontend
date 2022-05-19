import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FoodieBuckForm() {
  const navigate = useNavigate()

  const restaurant = useRef('')
  const amount = useRef(0)
  const date = useRef('')

  const saveFoodieBuck = e => {
    e.preventDefault()

    const data = {
      restaurant: restaurant.current.value,
      amount: amount.current.value,
      date: date.current.value,
    }

    console.log(`You spent $${data.amount} at ${data.restaurant} on ${data.date}.`)
    navigate('/available')
  }

  return (
    <form className='flex flex-col items-center m-2' onSubmit={saveFoodieBuck}>
      <label htmlFor='restaurant' className='flex flex-col mb-1 pb-1'>
        Restaurant:
        <input
          id='restaurant'
          type='text'
          placeholder='Condados'
          required
          ref={restaurant}
          className='flex flex-col my-2 p-2 border border-gray-400'
        />
      </label>
      <label htmlFor='amount' className='flex flex-col mb-1 pb-1'>
        Amount:
        <input
          id='amount'
          type='number'
          step='0.01'
          min='0'
          placeholder='10.00'
          required
          ref={amount}
          className='flex flex-col my-2 p-2 border border-gray-400'
        />
      </label>
      <label htmlFor='date' className='mb-1 pb-1'>
        Date:
        <input type='date' required ref={date} className='m-2 p-2 border border-gray-400' />
      </label>
      <button
        type='submit'
        className='text-center bg-green-800 hover:bg-green-700 text-gray-200 m-4 p-4 w-48 rounded-lg'>
        Save FoodieBuck
      </button>
      <Link to='/available'>
        <div className='text-center rounded-lg bg-red-800 hover:bg-red-700 text-gray-200 mb-4 p-4 w-48'>Cancel</div>
      </Link>
    </form>
  )
}
