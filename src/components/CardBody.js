import './CardBody.css'

import ButtonCompo from './ButtonCompo'

import PricingCompo from './PricingCompo'
function CardBody() {
    return (
        <div className="card-body">
            <h5 className="card-title">Order Summary</h5>
            <p className="card-text">
                You can now listen to millions of songs, audiobooks, and podcasts on any
                device anywhere you like!.
            </p>

            <PricingCompo/>
            
            <ButtonCompo/>
         
         

        </div>
    )
}

export default CardBody