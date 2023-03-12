import styled from '@emotion/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #e9ecef;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderLeft = styled.View`
  display: flex;
  flex: 1;
  padding-right: 10px;
`;

export const HeaderRight = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Comments = styled.Text`
  font-size: 12px;
  color: #758390;
  font-weight: bold;
  margin-left: 4px;
`;

export const Body = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #758390;
  font-weight: bold;
`;
