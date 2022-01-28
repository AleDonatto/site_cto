import React from 'react'
import PropTypes from 'prop-types'
import { Seo } from './Seo'

export const Layout = ( {children} ) => {
    return (
        <div>
            <main>
                <Seo title={'CTO DEL PACIFICO'} lang={'es'} />
                {children}
            </main>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
