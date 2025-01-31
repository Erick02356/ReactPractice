import { useState } from "react"


export const Form = ({onSubmit}) =>{

    const [item, setItem] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(item ==="") return
        onSubmit(item)
        setItem("")
    }


    return(
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor="item"></label>
        <input 
          type="text" 
          name="item" 
          id="item" 
          value={item}
          onChange={e => setItem(e.target.value)}
          />
      </div>
      <button className='btn'>Add</button>
    </form>

    )
}