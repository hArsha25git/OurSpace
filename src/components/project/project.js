import React from 'react'
import './project.css'
function Project({info}){
    return(
        <div className='pro'>
            <div className='red1'>
                <h1 className='h1'>{info.title}</h1>
                <p className='des'>{info.desc}</p>
                <b><a href="" className='button'>Know more&gt;</a></b>
            </div>
            <div className='red2'>
            <img align='right' alt='img' className="primg" src={info.image}></img>
            </div>

        </div>
         
    )
}
export default Project;