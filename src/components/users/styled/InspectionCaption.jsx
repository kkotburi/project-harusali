import React from 'react';
import { styled } from 'styled-components';

const InspectionCaption = ({ nickNamestate }) => {
  let temp = '';
  if (nickNamestate === 'overlap') {
    temp = `이미 다른 유저가 사용하고 있는 닉네임 입니다.`;
  } else if (nickNamestate === 'none') {
    temp = '문자와 숫자를 이용하여 3자이상 작성해 주세요.';
  }
  return <Caption props={nickNamestate}>{temp}</Caption>;
};

export default InspectionCaption;

const Caption = styled.p`
  font-size: 14px;
  margin-top: 5px;
  font-weight: 600;
  color: ${({ props }) => {
    switch (props) {
      case 'ok':
        return 'blue';
      default:
        return 'red';
    }
  }};
`;
