import React from 'react'
import * as S from './style'

export function Header({
  logo,
  blog,
  faq,
  enter,
  lang,
  title,
  subtitle,
  start,
  strytegyimg,
  divtitle,
  divparagraph
}) {
  return (
    <S.Container>
      <S.NavHeader>
        <S.ImageLogo src={logo} alt="Strytegy" />
        <div>
          <S.BtnsInfo>{blog}</S.BtnsInfo>
          <S.BtnsInfo>{faq}</S.BtnsInfo>
          <S.BtnsInfo>{enter}</S.BtnsInfo>
          <S.BtnsInfo>{lang}</S.BtnsInfo>
        </div>
      </S.NavHeader>
      <S.HeaderHub>
        <S.Hubtop>
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <button>{start}</button>
          </div>
          <figure>
            <img src={strytegyimg} alt=""/>
          </figure>
        </S.Hubtop>
        <S.HubBottom>
          <h2>{divtitle}</h2>
          <p>{divparagraph}</p>
        </S.HubBottom>
      </S.HeaderHub>
    </S.Container>
  )
}
