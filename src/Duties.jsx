import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

const Duties = ({duties}) => {
    return (
        <div className="job-duties">
            {duties.map((duty => {
                const id = uuidv4();
                return <div className="job-duty" key={id}>
                    <FaAngleDoubleRight className='icon'/>
                    <div>{duty}</div>
                </div>
            }))}
        </div>
    )
}

export default Duties
