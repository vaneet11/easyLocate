import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './LayoutComponents/Sidebar'
import Navbar from './LayoutComponents/Navbar'
import SpinnerLoader from '../Common/SpinnerLoader'
export default function ProtectedLayout({ children, ...props }) {
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 3000)
    }, [])

    let islogin = true
    if (!islogin) {
        return <Navigate to='/login' />
    }
    return (
        <Container fluid className='p-0 m-0  overflow-hidden'>
            {isLoading && <SpinnerLoader />}
            <Row>
                <Col md={2} className='p-0'>
                    <Sidebar />
                </Col>
                <Col md={10} className='p-0'>
                    <Navbar />
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}
