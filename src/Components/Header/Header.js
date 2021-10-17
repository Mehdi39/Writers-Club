import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const penIcon = <FontAwesomeIcon icon={faPenSquare} />

    const cart = props.cart;
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const writer = cart[i];
        let remove$Sign = parseInt(writer.salary.slice(1))
        totalCost = totalCost + remove$Sign;
    }

    const uniq = [...new Set(cart)];

    return (
        <div className="container border border-3 my-3 rounded">
            <div className="row">
                <div className="col border-3 border-end col-lg-8 d-flex flex-column justify-content-center align-items-center">
                    <h2>Making A Great Writers Club</h2>
                    <p>“A loss that can be repaired by money is not of such very great importance.” ― Anonymous, The Arabian Nights</p>
                    <h2>Total Budget: $15000/=</h2>
                </div>
                <div className="col col-lg-4 text-center my-2">
                    <h2>{penIcon} Writers Added: {props.cart.length}</h2>
                    <h3>Total Cost: ${totalCost}</h3>
                    <ul className="list-group list-group-flush">
                        {
                            uniq.map(writer => <li className="list-group-item">{writer.author} - {writer.salary}</li>)
                        }
                    </ul>
                    <button className="btn btn-success">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Header;