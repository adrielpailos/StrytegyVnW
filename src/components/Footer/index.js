import React from 'react'
import { ImageLogo } from '../Header/style'
import * as S from './style'

export function Footer({
  colab,
  colabparagraph,
  startfree,
  logo,
  titleabout,
  paragraphabout,
  copy,
  Isti,
  social,
  insta,
  face,
  linkedin,
  help,
  terms,
  privacy,
  support,
  blog,
  faq
}) {
  return (
    <S.Container>
      <S.Collab>
        <span>
          <h2>{colab}</h2>
          <p>{colabparagraph}</p>
          <button>{startfree}</button>
        </span>
      </S.Collab>
      <S.FooterHub>
        <span>
          <S.About>
            <h2>{titleabout}</h2>
            <S.Paragraph>{paragraphabout}</S.Paragraph>
            <S.CopyDiv>
              <figure>
                <img src={logo} alt=""/>
              </figure>
              <p>{copy}</p>
            </S.CopyDiv>
            <S.Paragraph>{Isti}</S.Paragraph>
          </S.About>
          <S.Media>
            <nav>
              <h2>{social}</h2>
              <button>{insta}</button>
              <button>{face}</button>
              <button>{linkedin}</button>
              <button>{blog}</button>
            </nav>
            <nav>
              <h2>{help}</h2>
              <button>{faq}</button>
              <button>{terms}</button>
              <button>{privacy}</button>
              <button>{support}</button>
            </nav>
          </S.Media>
        </span>
      </S.FooterHub>
    </S.Container>
  )
}
