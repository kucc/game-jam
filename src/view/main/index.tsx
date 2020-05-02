import React from "react";

import * as S from "./styles";
import { FONT_COLOR } from "../../constant";

const Main: React.FC = () => {
  return (
    <S.Main>
      <S.Container>
        <S.InnerBox>
          <S.SloganContainer>
            <S.Slogan>실력 무관, 개발도구 무관!</S.Slogan>
          </S.SloganContainer>
          <S.ContentContainer>
            <S.ContentBoxContainer>
              <S.ContentBox color={FONT_COLOR.date}>일시</S.ContentBox>
            </S.ContentBoxContainer>
            <S.ContentMessageContainer>
              <S.ContentMessageTitle>
                2020.05.16(토) 18:00 ~ 17(일) 09:00
              </S.ContentMessageTitle>
              <S.ContentMessageDescription>
                ※ 공식 행사 시간은 상기와 같고, 먼저 동방에 와서 작업
                시작하시거나 부분적으로 참여하셔도 무관합니다.
              </S.ContentMessageDescription>
            </S.ContentMessageContainer>
            <S.ContentBoxContainer>
              <S.ContentBox color={FONT_COLOR.place}>장소</S.ContentBox>
            </S.ContentBoxContainer>
            <S.ContentMessageContainer>
              <S.ContentMessageTitle>
                KUCC 동아리방 (학생회관 314호)
              </S.ContentMessageTitle>
            </S.ContentMessageContainer>
            <S.ContentBoxContainer>
              <S.ContentBox color={FONT_COLOR.theme}>주제</S.ContentBox>
            </S.ContentBoxContainer>
            <S.ContentMessageContainer>
              <S.ContentMessageTitle>코로나 바이러스</S.ContentMessageTitle>
            </S.ContentMessageContainer>
            <S.ContentBoxContainer>
              <S.ContentBox color={FONT_COLOR.personnel}>인원</S.ContentBox>
            </S.ContentBoxContainer>
            <S.ContentMessageContainer>
              <S.ContentMessageTitle>
                개인 혹은 3인 이하 팀
              </S.ContentMessageTitle>
            </S.ContentMessageContainer>
          </S.ContentContainer>
        </S.InnerBox>
      </S.Container>
    </S.Main>
  );
};

export default Main;
