import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {

    // const [ firstname, setFirstName ] = useState( '' );
    // const [ lastname, setLastName ]   = useState( '' );
    // const [ email, setEmail ]         = useState( '' );
    // const [ loader, setLoader ] = useState( 'Save Settings' );

    // const url = `${appLocalizer.apiUrl}/wpbc/v1/settings`;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoader( 'Saving...' );
    //     axios.post( url, {
    //         firstname: firstname,
    //         lastname: lastname,
    //         email: email
    //     }, {
    //         headers: {
    //             'content-type': 'application/json',
    //             'X-WP-NONCE': appLocalizer.nonce
    //         }
    //     } )
    //     .then( ( res ) => {
    //         setLoader( 'Save Settings' );
    //     } )
    // }

    // useEffect( () => {
    //     axios.get( url )
    //     .then( ( res ) => {
    //         setFirstName( res.data.firstname );
    //         setLastName( res.data.lastname );
    //         setEmail( res.data.email );
    //     } )
    // }, [] )

    return(
        <React.Fragment>
            <div class="card" style="width: 18rem;">
            <img src="../../assets/images/bike.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            
        </React.Fragment>
    )
}

export default Card;