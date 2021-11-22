import React from "react";
import * as S from './style'

const Security = ({
  datatitle,
  security,
  dataparagraph01,
  dataparagraph02,
  dataparagraph03
}) => {

  return (
    <S.Container>
      <S.Title>{datatitle}</S.Title>
      <S.ImageBox>
        <S.Image src={security} alt="luan do mal"/>
      </S.ImageBox>
      <S.List>
        <ul>
          <S.Item>{dataparagraph01}</S.Item>
          <S.Item>{dataparagraph02}</S.Item> 
          <S.Item>{dataparagraph03}</S.Item>
        </ul>
      </S.List>
    </S.Container>
  )
}
export default Security