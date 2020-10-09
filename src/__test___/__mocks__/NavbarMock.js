import React from 'react'
import { Router } from 'react-router-dom'

export default function NavbarMock({children, history}) {

    return(
        <Router history={history}>    
            {children}
        </Router>
    )
}