import React,{useState} from 'react';


const Greeting = () => {
    const [val,setVal] = useState("");
    return (
        <>
       
        <form>
            <label>Enter your name:</label><br></br>
            <input type="text" value={val} onChange={(e) => {setVal(e.target.value)}}/>
        </form>
       
        <div>
          {val ? <h1>Hello {val}!</h1> : ""}
        </div>
        
        </>
    );
};

export default Greeting;