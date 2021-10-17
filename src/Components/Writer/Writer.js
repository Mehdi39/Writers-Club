import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


const Writer = (props) => {

    // fontawesome icon
    const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />

    // deconstructing props 
    const {author, img, genre, age, country, salary} = props.writersInfo;

    const handleSelectionBtn = props.handleSelectionBtn;

    return (
        // showing every writer using bootstrap's card
        <div className="col col-lg-4 mb-3">
            <div className="card rounded">
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-start">Role: {genre}</li>
                    <li className="list-group-item text-start">Age: {age}</li>
                    <li className="list-group-item text-start">Country: {country}</li>
                    <li className="list-group-item text-start">Salary: {salary}</li>
                </ul>
                <button className="btn btn-success" onClick={() => handleSelectionBtn(props.writersInfo)}>Add to Club</button>
                <div className="card-body text-center">
                    <a href="/" className="card-link fs-3">{facebookIcon}</a>
                    <a href="/" className="card-link fs-3">{twitterIcon}</a>
                </div>
            </div>
        </div>
    );
};

export default Writer;