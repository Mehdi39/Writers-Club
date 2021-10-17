// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenSquare } from '@fortawesome/free-solid-svg-icons'

// const Cart = (props) => {
    
//     const cart = props.cart;
//     let totalCost = 0;

//     for (let i = 0; i < cart.length; i++) {
//         const writer = cart[i];
//         let remove$Sign =parseInt(writer.salary.slice(1))
//         totalCost = totalCost + remove$Sign;
        
//     }

//     const penIcon = <FontAwesomeIcon icon={faPenSquare} />
//     return (
//         <div>
//             <h2>{penIcon} Writers Added: {props.cart.length}</h2>
//             <h3>Total Cost: $ {totalCost}</h3>
//             <button>Confirm</button>
//         </div>
//     );
// };

// export default Cart;