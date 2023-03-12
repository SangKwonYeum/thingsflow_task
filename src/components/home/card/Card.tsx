import React from 'react';
import { Issue } from 'types/issue';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as S from './Card.styles';

interface Props {
  issue: Issue;
  onRoute: () => void;
}

export default function Card({ issue, onRoute }: Props): JSX.Element {
  const {
    title,
    number,
    comments,
    created_at: createdAt,
    user: { login },
  } = issue;

  const createAtDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <S.Container onPress={onRoute}>
      <S.HeaderContainer>
        <S.HeaderLeft>
          <S.Title>{title}</S.Title>
        </S.HeaderLeft>
        <S.HeaderRight>
          <MaterialIcons name='comment' size={20} color='#758390' />
          <S.Comments>{comments}</S.Comments>
        </S.HeaderRight>
      </S.HeaderContainer>
      <S.Body>
        <S.Info>{`#${number} opened ${createAtDate} by ${login}`}</S.Info>
      </S.Body>
    </S.Container>
  );
}
