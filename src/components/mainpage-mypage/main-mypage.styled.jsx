import { styled } from 'styled-components';

export const SectionContainer = styled.div`
  height: calc(100vh - 260px);
  overflow: hidden;
  padding-top: 260px;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  width: 900px;
  height: 230px;
  background-color: aliceblue;
  text-align: center;
  margin-bottom: 30px;
`;

export const Inner = styled.div`
  width: 900px;
  margin: 0px auto;
  position: relative;
`;

export const Contents = styled.div`
  //   height: 400px;
  padding-bottom: 20px;
  background-color: red;
`;

export const ContentImg = styled.div`
  height: 200px;
  background-color: beige;
`;

export const TextArea = styled.div`
  margin: 0 10px;
`;

export const Title = styled.p`
  color: royalblue;
  font-size: 24px;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;

export const LikeCommentArea = styled.div`
  margin-top: 10px;
  height: 20px;
  background-color: orange;
`;

export const LogoImg = styled.div`
  margin: 20px auto;
  width: 60px;
  height: 60px;
  background-color: royalblue;
`;
export const ProfileCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;
export const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HelloTitle = styled.p`
  margin-top: 10px;
  //   width: 800px;
  //   background-color: rgb(152, 201, 230);
`;

export const EncouragementText = styled(Title)`
  color: #5763d4;
`;
