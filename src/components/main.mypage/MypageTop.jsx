import styled from 'styled-components';

const MypageTop = () => {
  return (
    <Container>
      <LogoArea>
        <LogoImg></LogoImg>
      </LogoArea>
      <ProfileArea>
        <Profile src="https://th.bing.com/th/id/R.8c23b7f0f9950ec55052dd4d9fb155d3?rik=IA6g1y3itWeEyg&riu=http%3a%2f%2ffile3.instiz.net%2fdata%2fcached_img%2fupload%2f2023%2f01%2f01%2f12%2f2f77c8ce337e12c0aef5c5278d22f207.jpg&ehk=zk2rLH3BzvLCKYMi23peE3HZuVGt8C34dAUDS7pWlfQ%3d&risl=&pid=ImgRaw&r=0"></Profile>
      </ProfileArea>
      <Title>하루살이님 반가워요!</Title>
      <EncouragementText>오늘도 작성하셨네요 굿👍</EncouragementText>
    </Container>
  );
};
export default MypageTop;

const Container = styled.div`
  width: 900px;
  height: 230px;
  background-color: aliceblue;
  text-align: center;
  position: fixed;
`;
const LogoArea = styled.div`
  //   width: 800px;
  background-color: rgb(152, 201, 230);
  margin-bottom: 5px;
`;
const LogoImg = styled.div`
  margin: 20px auto;
  width: 60px;
  height: 60px;
  background-color: red;
`;
const ProfileArea = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  display: inline-block;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.p`
  margin-top: 10px;
  //   width: 800px;
  //   background-color: rgb(152, 201, 230);
`;

const EncouragementText = styled(Title)`
  color: #5763d4;
`;
