import styled from 'styled-components';
import CardDraw from '../mainpage-mypage/CardDraw';

const CardSection = () => {
  return (
    <Container>
      <InnerWrapper>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
        <CardDraw></CardDraw>
      </InnerWrapper>
    </Container>
  );
};
export default CardSection;

const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Container = styled.div`
  height: calc(100vh - 260px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-basis: 600px;
  flex-grow: 2;
`;
