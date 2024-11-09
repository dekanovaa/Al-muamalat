import React from 'react'
import './Partner.css'
import skrill from '../../../../assets/Skrill.png'
import stripe from '../../../../assets/Stripe.png'
import western from '../../../../assets/western.png'
import american from '../../../../assets/american.png'
import clarna from '../../../../assets/clarna.png'

function Partners() {
  return (
    <div className='partner'>
        <h1 className="partner_title">Our Partners and Clients</h1>
        <div className="slider">
        <div className='partner_slider'>
           <div className="slider_wrap">
            <img src={skrill} alt="Skrill" />
           </div>
           <div className="slider_wrap">
            <img src={stripe} alt="Stripe" />
           </div>
           <div className="slider_wrap">
            <img src={western} alt="Western" />
           </div>
           <div className="slider_wrap">
            <img src={american} alt="American" />
           </div>
           <div className="slider_wrap">
            <img src={clarna} alt="Clarna" />
           </div>

        </div>
        </div>

    </div>
  )
}

export default Partners