import React from "react";
import * as S from './style'

const Users = ({
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
}) => {

  return (
    <S.Container>
      <div>
        <h2>{titleusers}</h2>
        <S.Paragraph>"{paragraphusers}"</S.Paragraph>
        <S.UserID>
          <figure>
            <img src={userpic} alt=""/>
          </figure>
          <span>
            <S.UsersParagraph>{username}</S.UsersParagraph>
            <S.UsersParagraph>{userjob}</S.UsersParagraph>
          </span>
        </S.UserID>
      </div>
    </S.Container>
  )
}
export default Users