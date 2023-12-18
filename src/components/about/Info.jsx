import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
        <h3 className="about__title">Fresher</h3>
        <span className='about__subtitle'></span>
        </div>

      <div className="about__box">
      <h3 className="about__title">Completed</h3>
        <span className='about__subtitle'>3+ Projects</span>
      </div>

      <div className="about__box">
      <h3 className="about__title">Certified</h3>
        <span className='about__subtitle'>React JS</span>
      </div>
    </div>
  )
}

export default Info
