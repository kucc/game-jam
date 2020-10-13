import React from "react";

import * as S from "./styles";
import { FONT_COLOR } from "../../constant";

const Main: React.FC = () => {
  return (
    <S.Main>
      <S.Container>
        <S.TopArea>
          <S.TopBackgroudPurpleArea></S.TopBackgroudPurpleArea>
          <S.LogoCat src="https://user-images.githubusercontent.com/52532871/95823660-f732e600-0d68-11eb-9554-b7ebdfd72c12.png" />
          <S.GameJamLogo src="https://user-images.githubusercontent.com/52532871/95824263-f77fb100-0d69-11eb-9051-ab6d7ee1ea2f.jpg"></S.GameJamLogo>
        </S.TopArea>
        <S.InnerBox>
          <S.SloganContainer>
            <S.Slogan>실력 무관, 개발도구 무관!</S.Slogan>
          </S.SloganContainer>
          <S.ContentContainer>
            <S.FlexContainer>
              <S.ContentBoxContainer>
                <S.ContentBox color={FONT_COLOR.date}>일시</S.ContentBox>
              </S.ContentBoxContainer>
              <S.ContentMessageContainer>
                <S.ContentMessageTitle>
                  2020.11.06(금) 18:00<br/>~  2020.11.07(토) 09:00
                </S.ContentMessageTitle>
                <S.ContentMessageDescription>
                  ※ 공식 행사 시간은 상기와 같지만, 부분적으로 참여하셔도 무관합니다.
                </S.ContentMessageDescription>
              </S.ContentMessageContainer>
            </S.FlexContainer>
            <S.FlexContainer>
              <S.ContentBoxContainer>
                <S.ContentBox color={FONT_COLOR.place}>장소</S.ContentBox>
              </S.ContentBoxContainer>
              <S.ContentMessageContainer>
                <S.ContentMessageTitle>
                안암 캐치카페 및 동아리방 (예정)
                </S.ContentMessageTitle>
              </S.ContentMessageContainer>
            </S.FlexContainer>
            <S.FlexContainer>
              <S.ContentBoxContainer>
                <S.ContentBox color={FONT_COLOR.theme}>주제</S.ContentBox>
              </S.ContentBoxContainer>
              <S.ContentMessageContainer>
                <S.ContentMessageTitle>함께</S.ContentMessageTitle>
              </S.ContentMessageContainer>
            </S.FlexContainer>
            <S.FlexContainer>
              <S.ContentBoxContainer>
                <S.ContentBox color={FONT_COLOR.personnel}>인원</S.ContentBox>
              </S.ContentBoxContainer>
              <S.ContentMessageContainer>
                <S.ContentMessageTitle>
                  개인 혹은 3인 이하 팀
                </S.ContentMessageTitle>
              </S.ContentMessageContainer>
            </S.FlexContainer>
          </S.ContentContainer>
          <S.JoinButton href="https://forms.gle/9KpXESRkgDEsta9B7">참가 신청</S.JoinButton>
        </S.InnerBox>
      </S.Container>
    </S.Main>
  );
};

export default Main;
