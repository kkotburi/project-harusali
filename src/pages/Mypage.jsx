import styled from 'styled-components';
import MypageTop from '../components/main.mypage/MypageTop';
import MypageBtn from '../components/main.mypage/MypageBtn';
import MypageBottom from '../components/main.mypage/MypageBottom';

const Mypage = () => {
  return (
    <ViewPort>
      <Inner>
        <MypageTop />
        <MypageBottomContainer>
          <MypageBottom />
          <MypageBtn />
        </MypageBottomContainer>
      </Inner>
    </ViewPort>
  );
};

export default Mypage;

const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Inner = styled.div`
  width: 900px;
  margin: 0px auto;
  position: relative;
`;

const MypageBottomContainer = styled.div`
  height: calc(100vh - 230px);
  overflow: hidden;
  padding-top: 230px;
  background-color: gray;

  display: flex;
`;
