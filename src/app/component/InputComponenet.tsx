'use client'

import React from 'react'

interface IChildProps {
  changeTextProp: (text: string) => void
}

const InputComponenet = ({ changeTextProp }: IChildProps) => {

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   changeTextProp(e.target.value);
    // }


  return (
    <div>
  {/* <input onChange={handleChange} className='border-2 border-slate-500 shadow-md shadow-slate-300 rounded-md' type="text"  /> */}
      <input onChange={(e) => changeTextProp(e.target.value)} className='border-2 border-slate-500 shadow-md shadow-slate-300 rounded-md' type="text"  />
    </div>
  )
}

export default InputComponenet
