import React from 'react'

export default function ForecastPreview({ time, temp }) {
    return (
        <li>
            <span>{time}</span>
            <p>{Math.floor(temp)}</p>
            <img src='/degreeIcon.svg' alt='Degree icon' className='degree-sign' />
        </li>
    )
}