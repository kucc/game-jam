import React from "react";

import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.NickNameContainer>
          <S.NickName href="https://github.com/riverandeye">riverandeye</S.NickName> | <S.NickName href="https://github.com/r-4bb1t">r-4bb1t</S.NickName>
        </S.NickNameContainer>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
