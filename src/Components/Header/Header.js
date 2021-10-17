import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const penIcon = <FontAwesomeIcon icon={faPenSquare} />

    const cart = props.cart;
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const writer = cart[i];
        let remove$Sign =parseInt(writer.salary.slice(1))
        totalCost = totalCost + remove$Sign;
        
    }
    return (
        <div className="container border border-2 my-3">
            <div className="row">
                <div className="col border-end col-lg-8">
                    <h2>Making A Great Writers Club</h2>
                    <p>“A loss that can be repaired by money is not of such very great importance.” ― Anonymous, The Arabian Nights</p>
                    <h2>Total Budget: $15000/=</h2>
                </div>
                <div className="col col-lg-4">
                    <h2>{penIcon} Writers Added: {props.cart.length}</h2>
                    <h3>Total Cost: ${totalCost}</h3>
                    <button>Confirm</button>
                </div>
            </div>

        </div>
    );
};

export default Header;