import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import Security from '../components/Security'
import Users from '../components/Users'
import AddDates from '../components/AddDates'
import { Footer } from '../components/Footer'
import GlobalStyle from "../components/global/globalstyles"

export const query = graphql`
  query {
    alldata {
      projects {
        aboutusparagraph
        btnblog
        btnenter
        btnface
        btnfaq
        btninstagram
        btnlang
        btnlinkedin
        btnprivacy
        btnseemore
        btnstartfree
        btnstartnow
        btnsupport
        btnterms
        card01Img {
          url
        }
        card02Img {
          url
        }
        card03Img {
          url
        }
        cardconcept
        carddate01
        carddate02
        carddate03
        cardfeedback
        cardlogoimg {
          url
        }
        cardnextlevel
        copyright
        dataparagraph01
        dataparagraph02
        dataparagraph03
        divparagraph
        divtitle
        
        footerparagraph
        footertittle
        foryouparagraph
        istiparagraph
        maindivimg {
          url
        }
        maindivparagraph
        maindivtitle
        maingifimg {
          url
        }
        maingifparagraph
        maingiftittle
        navlogoimg {
          url
        }
        securitypic{
          url
        }
        strytegycard
        strytegyimg {
          url
        }
        subtitle
        title
        titleaboutus
        titledatasafe
        titleforyou
        titlehelp
        titlesocial
        titleusers
        userjob
        username
        usersparagraph
        userpic {
          url
        }
      }
    }
  }
`

export default function Index({ data }) {

  const dataMain = data.alldata.projects[0]

  return (
    <div>
      <GlobalStyle/>
          {console.log("to aqui:", data)}
      <Header
        logo={dataMain.navlogoimg.url}
        blog={dataMain.btnblog}
        faq={dataMain.btnfaq}
        enter={dataMain.btnenter}
        lang={dataMain.btnlang}
        title={dataMain.title}
        subtitle={dataMain.subtitle}
        start={dataMain.btnstartnow}
        strytegyimg={dataMain.strytegyimg.url}
        divtitle={dataMain.divtitle}
        divparagraph={dataMain.divparagraph}
      />
      <Main
        gif={dataMain.maingifimg.url}
        giftitle={dataMain.maingiftittle}
        gifparagraph={dataMain.maingifparagraph}
        divimg={dataMain.maindivimg.url}
        divtitle={dataMain.maindivtitle}
        divparagraph={dataMain.maindivparagraph}
        titlefor={dataMain.titleforyou}
        forparagraph={dataMain.foryouparagraph}
      />
      <Security
        datatitle={dataMain.titledatasafe}
        security={dataMain.securitypic.url}
        dataparagraph01={dataMain.dataparagraph01}
        dataparagraph02={dataMain.dataparagraph02}
        dataparagraph03={dataMain.dataparagraph03}
      />
      <Users
        titleusers={dataMain.titleusers}
        paragraphusers={dataMain.usersparagraph}
        userpic={dataMain.userpic.url}
        username={dataMain.username}
        userjob={dataMain.userjob}
      />
      <AddDates
        cardimg01={dataMain.card01Img.url}
        cardimg02={dataMain.card02Img.url}
        cardimg03={dataMain.card03Img.url}
        cardfeed={dataMain.cardfeedback}
        cardconcept={dataMain.cardconcept}
        cardnext={dataMain.cardnextlevel}
        cardlogo={dataMain.cardlogoimg.url}
        strytegy={dataMain.strytegycard}
        date01={dataMain.carddate01}
        date02={dataMain.carddate02}
        date03={dataMain.carddate03}
        btnsee={dataMain.btnseemore}
      />
      <Footer
        colab={dataMain.footertittle}
        colabparagraph={dataMain.footerparagraph}
        startfree={dataMain.btnstartfree}
        titleabout={dataMain.titleaboutus}
        paragraphabout={dataMain.aboutusparagraph}
        copy={dataMain.copyright}
        Isti={dataMain.istiparagraph}
        social={dataMain.titlesocial}
        insta={dataMain.btninstagram}
        face={dataMain.btnface}
        linkedin={dataMain.btnlinkedin}
        help={dataMain.titlehelp}
        terms={dataMain.btnterms}
        privacy={dataMain.btnprivacy}
        support={dataMain.btnsupport}
        logo={dataMain.cardlogoimg.url}
        blog={dataMain.btnblog}
        faq={dataMain.btnfaq}
      />
    </div>
  )
}
