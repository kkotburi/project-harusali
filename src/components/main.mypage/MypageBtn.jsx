import styled from 'styled-components';
import { BtnFill } from '../Btn.style';

const MypageBtn = () => {
  return (
    <BtnArea>
      <BtnFill>글 작성</BtnFill>
      <BtnFill>내 정보 수정</BtnFill>
    </BtnArea>
  );
};
export default MypageBtn;

const BtnArea = styled.div`
  //   position: fixed;

  //   top: 230px;
  //   right: 0px;
  width: 300px;
  height: calc(100vh - 230px);
  background-color: #61dafb;
  flex-basis: 300px;
  flex-grow: 1;
  display: flex;
  padding-top: 50px;
  flex-direction: column;
`;
