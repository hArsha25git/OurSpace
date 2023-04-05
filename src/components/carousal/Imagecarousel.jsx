import React from 'react'
import Mycard from '../card/Mycard.js'
import './Imagecarousel.css'
import { useRef } from 'react'
import Footer1 from '../footer/Footer1.jsx'
import Project from '../project/project.js'
import ProjectList from '../ProjectList.js'
import ImageList from '../ImageList.js'
const Imagecarousel = () => {
  const ref = useRef(null); //ref to parent div
  console.log(ref)

  const onClickLeftHandler = () => {
    //console.log(ref.current.scrollLeft)
    ref.current.scrollLeft = ref.current.scrollLeft - 308;
    //console.log(ref.current.scrollLeft)

  };
  const onClickRightHandler = () => {
    // let width = ref.current.clientWidth;
    console.log(ref.current.scrollLeft)
    ref.current.scrollLeft = ref.current.scrollLeft + 308;
    console.log(ref.current.scrollLeft)
  };
  return (
    <>
      <div className='mus'> 
      <img src='/images/musk_logo.png' className='musimg'></img> 
      <p>yuyuyu tuyy uty utyutu uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty strdty uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty strvv uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty str uttyut uytyutyuyut 7tu 7tyu uy tyuyuyu u utyutyut uutyutty strvvv 7tyut yuytu 7tyut uitui y yuiy uytyt uy yuttuy uyyuyu yuyyu uiyuiyui</p>
      </div>
      <div className="product-carousel">
        <button className="pre-btn" onClick={onClickLeftHandler}><p>&lt;</p></button>
        <button className="next-btn" onClick={onClickRightHandler}><p>&gt;</p></button>

        <div className='teamName'>
          <center><h1>Team Musketeers</h1></center>
        </div>
        <div ref={ref} className="product-container">

          {ImageList.map((prs) => <Mycard key={prs.id} branch={prs.branch} cardno={prs.id} pic={prs.path} name={prs.name} clg={prs.clg} />)}

        </div>
      </div>
      <div className='projects'>
        <center><h1>Projects</h1></center>
        <br></br>
        {ProjectList.map((proj) => (<><Project key={proj.id} info={proj} /><br></br></>))}
      </div>
    </>
  )
}

export default Imagecarousel 