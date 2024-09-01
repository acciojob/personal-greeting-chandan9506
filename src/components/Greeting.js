import React, { useState } from 'react'

const Greetings = () => {
    const[name, setName] = useState('')
  return (
    <div>
      <label htmlFor='name'>Enter Your Name:</label><br/>
      <input id='name' type="text" onChange={(e) => {
        let greet= e.target.value ? "Hello " + e.target.value +"!" : "";
        setName(greet)

      }} />
      <p>{name}</p>
    </div>
  )
}

export default Greetings






// import React, { useState } from "react";
// import './../styles/App.css';

// const App = () => {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <label htmlFor="name">Enter your name:</label>
//       <input 
//         type="text" 
//         id="name" 
//         onChange={e => setText(e.target.value)} 
//       />
//      <p>{text && text.length>0?"Hello "+ text+"!":""}</p>
//     </div>
//   );
// }

// export default App;