import React from 'react'

const itemDetail = ({data}) => {
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detailImage' src="{data.img}" alt="" />
            <div className='content'>
                <h1>{data.title}</h1>
            </div>
        </div>
    </div>
  )
}

export default itemDetail