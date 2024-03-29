import React from 'react'
import "./Main.css"
const Main = (props) => {
    console.log(props);
    const {data} = props
    console.log(data);
  return (
    <main>
        <div className='img'>
       {data.map((i)=>(
       <div> <img className='img-item' src={i.src.large} alt="" />
       <p>{i.photographer}</p> </div>
       ))}
        </div>
    </main>
  )
}

export default Main;