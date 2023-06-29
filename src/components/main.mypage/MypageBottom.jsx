import styled from 'styled-components';

const MypageBottom = () => {
  return (
    <Container>
      <InnerWrapper>
        <Contents>
          <ContentImg></ContentImg>
          <TextArea>
            <Title>닉네임 님의 작성날짜 TIL</Title>
            <Text>김혜민님 css 도 공부하시고, git 도 공부하세요 다하세요도 공부하시고, git 도 공부하세요 다하세요</Text>
            <LikeCommentArea></LikeCommentArea>
          </TextArea>
        </Contents>
        <Contents>
          <ContentImg></ContentImg>
          <TextArea>
            <Title>닉네임 님의 작성날짜 TIL</Title>
            <Text>김혜민님 css 도 공부하시고, git 도 공부하세요 다하세요도 공부하시고, git 도 공부하세요 다하세요</Text>
            <LikeCommentArea></LikeCommentArea>
          </TextArea>
        </Contents>
        <Contents>
          <ContentImg></ContentImg>
          <TextArea>
            <Title>닉네임 님의 작성날짜 TIL</Title>
            <Text>김혜민님 css 도 공부하시고, git 도 공부하세요 다하세요도 공부하시고, git 도 공부하세요 다하세요</Text>
            <LikeCommentArea></LikeCommentArea>
          </TextArea>
        </Contents>
        <Contents>
          <ContentImg></ContentImg>
          <TextArea>
            <Title>닉네임 님의 작성날짜 TIL</Title>
            <Text>김혜민님 css 도 공부하시고, git 도 공부하세요 다하세요도 공부하시고, git 도 공부하세요 다하세요</Text>
            <LikeCommentArea></LikeCommentArea>
          </TextArea>
        </Contents>
        <Contents>
          <ContentImg></ContentImg>
          <TextArea>
            <Title>닉네임 님의 작성날짜 TIL</Title>
            <Text>김혜민님 css 도 공부하시고, git 도 공부하세요 다하세요도 공부하시고, git 도 공부하세요 다하세요</Text>
            <LikeCommentArea></LikeCommentArea>
          </TextArea>
        </Contents>
      </InnerWrapper>
    </Container>
  );
};
export default MypageBottom;

const InnerWrapper = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Container = styled.div`
  height: calc(100vh - 230px);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-basis: 600px;
  flex-grow: 2;
`;

const Contents = styled.div`
  //   height: 400px;
  padding-bottom: 20px;
  background-color: red;
`;

const ContentImg = styled.div`
  height: 150px;
  background-color: beige;
`;

const TextArea = styled.div`
  margin: 0 10px;
`;

const Title = styled.p`
  color: royalblue;
  font-size: 24px;
  margin-top: 20px;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;
const LikeCommentArea = styled.div`
  margin-top: 10px;
  height: 20px;
  background-color: orange;
`;
