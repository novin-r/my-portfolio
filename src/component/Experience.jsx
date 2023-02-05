import React from 'react'
import './Experience.css';

function Experience() {
  return (
    <div className="timeline">
        <h1>Work Experience</h1>
        <div className="timeline-item">
            <div className="timeline-year">
            <p className="start-year">2022, November</p>
            <p className="finish-year">...</p>
            </div>
            <div className="timeline-content">
            <p className="timeline-bullet">Högskolan i Skövde, Skövde— Skolambassadör</p>
            </div>
        </div>
        <div className="timeline-item">
            <div className="timeline-year">
            <p className="start-year">2022, Juni</p>
            <p className="finish-year">2022, Juli</p>
            </div>
            <div className="timeline-content">
            <p className="timeline-bullet">Bally’s Interactive(Internship), Skövde — Jr Developer</p>
            </div>
        </div>
        <div className="timeline-item">
            <div className="timeline-year">
            <p className="start-year">2021, Oktober</p>
            <p className="finish-year">2022, November</p>
            </div>
            <div className="timeline-content">
            <p className="timeline-bullet">Högskolan i Skövde, Skövde— Student Mentor</p>
            </div>
        </div>
        <div className="timeline-item">
            <div className="timeline-year">
            <p className="start-year">2021, Juni</p>
            <p className="finish-year">2021, Agusti</p>
            </div>
            <div className="timeline-content">
            <p className="timeline-bullet">Rawella, freelance— Jr Fullstack utvecklare</p>
            </div>
        </div>
        <div className="timeline-item">
            <div className="timeline-year">
            <p className="start-year">2019, Maj</p>
            <p className="finish-year">2020, Juli</p>
            </div>
            <div className="timeline-content">
            <p className="timeline-bullet">Distriktsdomare steg 1 Västmanland</p>
            </div>
        </div>
        <div className="timeline-item">
            <div className="timeline-year">
            <p className="start-year">2017, Juni</p>
            <p className="finish-year">2020, Augusti</p>
            </div>
            <div className="timeline-content">
            <p className="timeline-bullet">McDonald's, Västerås Stenby— Medarbetare</p>
            </div>
        </div>
    </div>
  )
}

export default Experience