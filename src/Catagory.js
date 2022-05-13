import React, { useState } from 'react'
import WorkApi from './api/WorkApi'

const Catagory = () => {
    const [work, setWORK] = useState(WorkApi)
    return (
        <section >
            <h1>CATEGORIES</h1>
            <div className='row'>
                {WorkApi.map((curElem) => {
                    const{id, url ,name}=curElem;
                    return (
                        <>
                            <div className='col-12 col-6 col-lg-4'>
                                <div className="card shadow p-3 mb-5 bg-body rounded">
                                    <img src={url} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Catagory