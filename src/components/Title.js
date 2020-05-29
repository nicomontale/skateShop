import React from 'react'

export default function Title({name, title}) {
    return (
        
        <div className="col-16 my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
                    {name}
                    <strong style={{color:'red'}}>
                        {title}
                    </strong>
                </h1>
        
        
            
        </div>
    )
}
