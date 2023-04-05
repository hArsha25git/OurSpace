import React from 'react'
import './Mycard.css'
import ImageList from '../ImageList'

const Mycard = ({pic,cardno,name,clg,branch}) => {
    return (
        <div className='mycard'>
             
             
             
            <center>
            <h2 className='attid'>attid {cardno}</h2>
            <img src={pic} className='pimg'></img>
            <div className='details'>
                <h2>{name}</h2>
                <h5>Technical Intern</h5>
                <h5>College: {clg}</h5>
                <h5>Branch : {branch}</h5>
            </div>
            </center>
            
             
        </div>
    )
}

export default Mycard