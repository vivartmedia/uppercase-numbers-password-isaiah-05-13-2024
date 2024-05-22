'use client'

import { useState } from "react";
import InputComponenet from "./component/InputComponenet";


//objective is to change text color on our Home Component with the Data from our child component

export default function Home() {
  const [changeText, setChangeText] = useState('');

// const changeTextFunc = (text: string) => {
//   setChangeText(text)
// }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <input type="text" onChange={(e) => setChangeText(e.target.value)} /> */}

      {/* <InputComponenet changeTextProp = {changeTextFunc}/> */}
<InputComponenet changeTextProp={setChangeText}/>
      <p>Password must contain
        <span style={{ color:  /[A-Z]/.test(changeText) ? 'blue' : 'red' }}> Uppercase, </span>
        <span style={{ color:  /[0-9]/.test(changeText) ? 'blue' : 'red' }}>Number</span>
      </p>



    </main>
  );
}
