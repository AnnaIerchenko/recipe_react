import React from 'react'

const CustomImg = ({ imgSrc, pt}) => {
  return (
    <div className='custom-image' style={{paddingTop: pt}}>
    <img src={imgSrc} alt="meal" />
    </div>
  )
}

export default CustomImg