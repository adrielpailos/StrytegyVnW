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
}) {
  return (
    <S.Container>
      <S.GifDiv>
        <figure>
          <img src={gif} alt="gif" />
        </figure>
        <div>
          <h2>{giftitle}</h2>
          <p>{gifparagraph}</p>
        </div>
      </S.GifDiv>
      <S.DivIntuitive>
        <figure>
          <img src={divimg} alt=""/>
        </figure>
        <div>
          <h2>{divtitle}</h2>
          <p>{divparagraph}</p>
        </div>
      </S.DivIntuitive>
      <S.TeamOg>
        <div>
          <h2>{titlefor}</h2>
          <p>{forparagraph}</p>
        </div>
      </S.TeamOg>
    </S.Container>
  )
}
