import React from 'react'
import { Container } from 'react-bootstrap'
export default function ErrorComponent() {
    return (
        <Container fluid className='errorParent'>
            <div className='errorElement'>
                <h3 className=''>Opps!!! Something went wrong </h3>
                <p> Kindly go back to our <a href="/">homepage</a> </p>
            </div>
        </Container>
    )
}
