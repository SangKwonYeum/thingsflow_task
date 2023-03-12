import React from 'react-native';
import DetailHeader from 'components/detail/header/DetailHeader';
import DetailContent from 'components/detail/content/Content';
import { Issue } from 'types/issue';
import * as S from './styles';

interface Props {
  data: Issue;
}

export function DetailContainer({ data }: Props): JSX.Element {
  const {
    title,
    number,
    comments,
    created_at: createdAt,
    user: { login, avatar_url: avatarUrl },
    body,
  } = data;

  const createAtDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <S.Container>
      <DetailHeader
        title={title}
        number={number}
        createAtDate={createAtDate}
        comments={comments}
        nickname={login}
        avatarUrl={avatarUrl}
      />
      {body && <DetailContent content={body} />}
    </S.Container>
  );
}
