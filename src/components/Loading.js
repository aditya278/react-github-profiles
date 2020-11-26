import React from 'react'
import spinner from '../images/spinner.gif';

export default function Loading() {
    return (
        <div>
            <img src={spinner} alt="Loading" style={{width:200, display:'block', margin:'auto'}} />
        </div>
    )
}
