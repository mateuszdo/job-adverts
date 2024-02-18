import React from 'react'
import Duties from './Duties'

const JobInfo = ({jobs, currentItem}) => {
    const {company, title, dates, duties} = jobs[currentItem];
    return (
        <div className='job-header'>
            <div className="job-main">
                <h2>{title}</h2>
                <h4>{company}</h4>
                <h5>{dates}</h5>
            </div>
            <Duties duties={duties}/>
        </div>
    )
}

export default JobInfo
