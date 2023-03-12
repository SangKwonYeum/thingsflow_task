/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-package';
import * as S from './Content.styles';

interface Props {
  content: string;
}

const styles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    color: 'purple',
  },
  link: {
    color: 'pink',
  },
  mailTo: {
    color: 'orange',
  },
  text: {
    color: '#555555',
  },
});

export default function DetailContent({ content }: Props): JSX.Element {
  return (
    <S.Container>
      {/* @ts-ignore  */}
      <Markdown styles={styles}> {content}</Markdown>
    </S.Container>
  );
}
