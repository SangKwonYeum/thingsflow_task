import React from 'react';
import * as S from './DetailHeader.styles';

interface Props {
  title: string;
  number: number;
  createAtDate: string;
  comments: number;
  nickname: string;
  avatarUrl: string;
}

export default function DetailHeader({
  title,
  number,
  createAtDate,
  comments,
  nickname,
  avatarUrl,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Number>{`#${number}`}</S.Number>
      </S.Wrapper>

      <S.Wrapper>
        <S.Image source={{ uri: avatarUrl }} />
        <S.Info>{`${nickname} opened this issue on ${createAtDate} • ${comments} comments `}</S.Info>
      </S.Wrapper>
    </S.Container>
  );
}
