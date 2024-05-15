'use client'

import React from 'react'

interface IChildProps {
    changeText: (text: string) => void
}

const InputComponenet = ({ changeText }: IChildProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            changeText(e.target.value);
    }


  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default InputComponenet
