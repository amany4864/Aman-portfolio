import React from 'react'
import './skills.scss'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <div className='experience'>

      <h2>Skills </h2>

      <div className="experience__container">

        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience