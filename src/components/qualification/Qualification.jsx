import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className='section__subtitle'>My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__button  button--flex">
          <i className="uil uil-graduation-cap  qualification_icon"></i>Education
        </div>

        <div className="qualification__content">
          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor's of Computer Application</h3>
                <span className="qualification__subtitle">Dharwad University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2019-2021
                </div>
                </div>
             
              <div>
              <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>


            <div className="qualification__data">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Senior Secondary (12th)</h3>
                <span className="qualification__subtitle">Govt.H.B.PU College, Kumta</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2016 - 2018
                </div>
              </div>
            </div>

            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School(SSLC)</h3>
                <span className="qualificationsubtitle">Shri Ramanath High School,Urakeri</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2013-2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
        
        </div>
      </div>

    </section>
  )
}

export default Qualification
