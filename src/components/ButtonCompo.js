import './Buttoncompo.css'

function ButtonCompo() {
    return (
        <div className="btns">
            <a href="/" className="btn btn-primary-custom">Proceed To Payment</a>
            <a href="/" className="btn btn-cancel ">Cancel Order</a>
        </div>
    )
}

export default ButtonCompo