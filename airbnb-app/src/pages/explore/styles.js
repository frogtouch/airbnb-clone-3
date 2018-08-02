import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';

const SearchHeader = styled.View`
  height: ${props => props.height};
  background-color: #fff;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  elevation: 2;
`;

const SearchHeaderGroup = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-horizontal: 20;
  padding-vertical: 5;
  background-color: #fff;
  margin-horizontal: 20;
  shadow-offset: 0 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
  elevation: 2;
  border-radius: 5;
  margin-top: ${props => props.offetTop};
`;

const SearchHeaderIcon = styled(Icon)`
  margin-right: 10
`;

const SearchHeaderInput = styled.TextInput`
  flex: 1;
  font-weight: 700;
  background-color: #fff;
  height: 40;
`;

const HelpFindWrapper = styled.View`
  flex: 1;
  padding-top: 20;
`;

const HelpFindTitle = styled.Text`
  font-size: 24;
  font-weight: 700;
  padding-horizontal: 20;
`;

const HelpFindCategoryWrapper = styled.View`
  height: 135;
  marginTop: 20;
`;

export {
  SearchHeader,
  SearchHeaderGroup,
  SearchHeaderIcon,
  SearchHeaderInput,
  HelpFindWrapper,
  HelpFindTitle,
  HelpFindCategoryWrapper
};