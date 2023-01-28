import React from 'react'
import { Helmet } from 'react-helmet'
import FacultyMemberSection4 from '../../Components/FacultymemberSection4'
import FancySection5 from '../../Components/FancySection5'
import OverSection2 from '../../Components/OverSection2'
import Section3Card from '../../Components/Section3Card'
import WeRankSection1 from '../../Components/WeRankSection1'
import Footer from '../../Utils/Footer'
import Navbar from '../../Utils/Navbar'

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>HomePage</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar />
            <WeRankSection1 />
            <OverSection2></OverSection2>
            <Section3Card />
            <FacultyMemberSection4></FacultyMemberSection4>
            <FancySection5 />
            <Footer />
        </>
    )
}

export default Home