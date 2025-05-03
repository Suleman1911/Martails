import React from 'react'
import './Clientfeeds.css'
import Heading from '../../Components/Heading/Heading'
import Quote from '../../assets/imgs/quote-left.png'

const Clientfeeds = () => {
  return (
    <>
      <div className="client-container">
        <div className="client-main">
        <Heading
        title="What Clients Say"
        para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam ea eligendi consectetur et quas ipsa impedit."
      />
      <div className='quote'>
        <img src={Quote} alt="" />
      </div>
      <div className="client-text">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis tempora accusamus unde ea molestiae eius eligendi magni, quo, rem, cumque nam velit similique sapiente laboriosam illo saepe aspernatur architecto.</p>
      </div>
      <div className="bold-text">
        <h4 style={{color: "#DD5144"}}>Walter Davidson</h4>
        <span>CEO AAA Limited</span>
      </div>
        </div>
      </div>
    </>
  )
}

export default Clientfeeds
