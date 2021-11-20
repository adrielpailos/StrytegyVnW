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
              giftitle={dataMain.maingiftitle}
              gifparagraph={dataMain.maingifparagraph}
              divimg={dataMain.maindivimg.url}
              divtitle={dataMain.maindivtitle}
              divparagraph={dataMain.maindivparagraph}
              titlefor={dataMain.titleforyou}
              forparagraph={dataMain.foryouparagraph}
              datatitle={dataMain.titledatasafe}
              security={dataMain.securitypic.url}
              dataparagraph01={dataMain.dataparagraph01}
              dataparagraph02={dataMain.dataparagraph02}
              dataparagraph03={dataMain.dataparagraph03}
              titleusers={dataMain.titleusers}
              paragraphusers={dataMain.usersparagraph}
              userpic={dataMain.userpic.url}
              username={dataMain.username}
              userjob={dataMain.userjob}
              cardimg01={dataMain.cardimg01}
              cardimg02={dataMain.cardimg02}
              cardimg03={dataMain.cardimg03}
              cardfeed={dataMain.cardfeedback}
              cardconcept={dataMain.cardconcept}
              cardnext={dataMain.cardnextlevel}
              cardlogo={dataMain.cardlogoimg.url}
              strytegy={dataMain.strytegycard}
              date01={dataMain.carddate01}
              date02={dataMain.carddate2}
              date03={dataMain.carddate03}
              btnsee={dataMain.btnseemore}
            />
            <Security/>
        </div>
    )
}
