import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import Security from '../components/Security'
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
            width
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
            <Main/>
            <Security/>
        </div>
    )
}
