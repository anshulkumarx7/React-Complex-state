import React, { useState } from "react";

function App() {
  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
  });
  const [isSubmitted,setSubmit]=useState(false);
  function handleChange(event) {
    const {value,name}=event.target;
    setfullName(prevValue=>{
      if(name === "fName"){
        return {
          fName:value,
          lName:prevValue.lName
        }
      }
      else if(name === "lName"){
        return {
          fName:prevValue.fName,
          lName:value
        }
      }
    })
  };
  function handleClick(e){
    e.preventDefault();
    console.log("clicked");
    setSubmit(true);

  }

  return (
    <div className="container">
    {isSubmitted ? <h1>Submitted Sucessfully</h1>:
    <div>
    <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
        </form>
      </div>  
    }
      
    </div>    
  );
}

export default App;
