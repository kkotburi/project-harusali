import { styled } from 'styled-components';

export const SectionContainer = styled.div`
  height: calc(100vh - 260px);

  padding-top: 260px;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  width: 900px;
  height: 230px;

  text-align: center;
  margin-bottom: 30px;
`;

export const Inner = styled.div`
  width: 900px;
  margin: 0px auto;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Contents = styled.div`
  //   height: 400px;
  padding-bottom: 20px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
`;

export const ContentImg = styled.div`
  height: 200px;
  width: 100%;

  background-color: beige;
  overflow: hidden;
`;

export const TextArea = styled.div`
  margin: 0 10px;
`;

export const Title = styled.p`
  color: royalblue;
  font-size: 18px;
  margin-top: 15px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 14px;
  overflow: hidden; // 을 사용해 영역을 감출 것
  text-overflow: ellipsis; // 로 ... 을 만들기
  white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
  word-break: break-all;
  /* width: 100px; */
  height: 30px;
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
  background-image: url(https://firebasestorage.googleapis.com/v0/b/react-week2-5375f.appspot.com/o/atom_4987950.png?alt=media&token=d4c7e3b4-f20a-4c08-8e75-e17de2fda0b8);
  background-size: cover;
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
  font-size: 32px;
  font-weight: 700;
  color: yellow;
  //   width: 800px;
  //   background-color: rgb(152, 201, 230);
`;

export const NickNameTitle = styled.p`
  margin-top: 10px;
  font-size: 32px;
  font-weight: 700;
  color: white;
  //   width: 800px;
  //   background-color: rgb(152, 201, 230);
`;

export const EncouragementText = styled(Title)`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;
