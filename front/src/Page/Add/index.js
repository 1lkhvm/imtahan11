import React from 'react'
import { Helmet } from 'react-helmet'
import AddpageFormik from '../../Components/AddpageFormik'
import Navbar from '../../Utils/Navbar'

function AddPage() {
    return (
        <> <Helmet>
            <meta charSet="utf-8" />
            <title>Add</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
            <Navbar />
            <AddpageFormik />
        </>
    )
}

export default AddPage