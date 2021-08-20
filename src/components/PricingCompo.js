
import './PricingCompo.css'

function PricingCompo(){

    return(
        <div className="pricing ">
            
            <img src="./music.svg" alt="music" />
            <div className="annual mx-4">
                <h6>Annual Plan</h6>
                <h6 className="price">$59.99/year</h6>
            </div>
            <a className="ms-4" href="/">Change</a>
        </div>

    )
}

export default PricingCompo