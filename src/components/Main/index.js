import React from 'react'
import * as S from './style'

export function Main({
  gif,
  giftitle,
  gifparagraph,
  divimg,
  divtitle,
  divparagraph,
  titlefor,
  forparagraph,
  datatitle,
  security,
  dataparagraph01,
  dataparagraph02,
  dataparagraph03,
  titleusers,
  paragraphusers,
  userpic,
  username,
  userjob,
  cardimg01,
  cardimg02,
  cardimg03,
  cardfeed,
  cardconcept,
  cardnext,
  cardlogo,
  strytegy,
  date01,
  date02,
  date03,
  btnsee
}) {
    return (
        <>
            <S.Container>

                <S.Wrapper>
                    <S.Title>{}</S.Title>
                    <S.Paragraph>{}</S.Paragraph>
                    <S.BtnStart>{}</S.BtnStart>
                </S.Wrapper>

                <img style={{ width: "350px" }} src={gif} alt="figure header" />
            </S.Container>

            <S.BottomWrapper>
                <S.BottomTitle>{}</S.BottomTitle>
                <S.BottomParagraph>{}</S.BottomParagraph>
            </S.BottomWrapper>

            <S.BoxGif>
                <figure>
                    <S.ImageMain src alt="" />
                </figure>
                <div>
                    <S.TitleGif>Realtime and Collaborative</S.TitleGif>
                    <S.ParagraphGif>Working remotely just got a lot easier. Our collaborative spaces provide greater integration and visualization of ideas in real time.</S.ParagraphGif>
                </div>
            </S.BoxGif>

            <S.BoxImgMain>
                <figure>
                    <S.ImageMain src alt="" />
                </figure>
                <div>
                    <S.TitleImgMain>Uncomplicated, intuitive, friendly</S.TitleImgMain>
                    <S.ParagraphImgMain>Ideal for who is looking to increase productivity and potentialize<br /> collaboration.
                        <br />Everything free, like thinking.</S.ParagraphImgMain>
                </div>
            </S.BoxImgMain>

            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>For you, for your team and your organization</S.TitleMain>
                    <S.ParagraphMain>Strytegy is a valuable tool to make you and your team more efficient in project management and new business development.</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
        </>
    )
}
