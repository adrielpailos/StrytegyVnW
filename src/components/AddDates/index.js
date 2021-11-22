import React from "react";
import * as S from './style'

const Users = ({
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
}) => {

  return (
    <S.Container>
      <S.Wrap>
        <S.Card>
          <figure>
            <img src={cardimg01} alt=""/>
          </figure>
          <div>
            <p>{cardfeed}</p>
          </div>
          <S.CardDate>
            <figure>
              <img src={cardlogo} alt=""/>
            </figure>
            <span>
              <h3>{strytegy}</h3>
              <p>{date01}</p>
            </span>
          </S.CardDate>
        </S.Card>
        <S.Card>
          <figure>
            <img src={cardimg02} alt=""/>
          </figure>
          <div>
            <p>{cardconcept}</p>
          </div>
          <S.CardDate>
            <figure>
              <img src={cardlogo} alt=""/>
            </figure>
            <span>
              <h3>{strytegy}</h3>
              <p>{date02}</p>
            </span>
          </S.CardDate>
        </S.Card>
        <S.Card>
          <figure>
            <img src={cardimg03} alt=""/>
          </figure>
          <div>
            <p>{cardnext}</p>
          </div>
          <S.CardDate>
            <figure>
              <img src={cardlogo} alt=""/>
            </figure>
            <span>
              <h3>{strytegy}</h3>
              <p>{date03}</p>
            </span>
          </S.CardDate>
        </S.Card>
      </S.Wrap>
    </S.Container>
  )
}
export default Users