import { useState } from "react";
import styled from "styled-components";
import { kakaoQrImg, profileImg, profileBackImg } from "../assets/images/kakaoImage";

const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .7);
`
const Box = styled.div`
  position: relative;
  height: 50vw;
  width: 27vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(128, 128, 128);
  background-image: url(${profileBackImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  & a{color: white;}
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  text-align: center;
  font-size: .8vw;
  padding: .5vw 1vw;
  &>:first-child{
    justify-self: flex-start;
    font-size: 2vw;
    font-weight: 100;
    cursor: pointer;
  }
`
const IconBox = styled.div`
  display: flex;
  &>*{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: .5vw;
    height: 1.5vw;
    width: 1.5vw;
    border: solid 1px white;
    border-radius: 50%;
    cursor: pointer;
  }
  &>:nth-child(3){color: yellow;}
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-bottom: 1.2vw;
  &>img{
    height: 7vw; width: 7vw;
    border-radius: 50%;
    margin-bottom: .3vw;
  }
  &>div{
    color: white;
    font-size: 1vw;
    font-weight: 100;
  }
`

const Footer = styled.div`
  height: 7vw;
  border-top: solid 1px rgba(255,255,255,0.5);
  padding-bottom: 1.2vw;
  display: flex;
  align-items: end;
  justify-content: space-evenly;
  color: white;
  font-weight: 100;
  text-align: center;
  &>*{
    cursor: pointer;
  }
  &>a{
    text-decoration: none;
  }
  &>*>i{
    font-size: 1.2vw;
    margin-bottom: .1vw;
  }
  &>*>div{
    font-size: .8vw;
  }
`

const QRBox = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  padding: 7rem 0 0;
  &>img{
    height: 390px;
    width: 390px;
  }
  &>button{
    padding: 10px 20px;
    font-size: 30px;
    font-weight: 700;
    background-color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  &>button:hover{background-color: ivory; color: gray; border: none; border-radius: 10px;}
  &>button:active{background-color: gray; color: white; border: none; border-radius: 10px;}
`
type kakaoType = {
  setIsModalOpen: (boolean: boolean) => void
}
function Kakaotalk({setIsModalOpen}: kakaoType){
  const [isQROpen,setIsQROpen] = useState(false);
  return(
    <Container onClick={e=>e.stopPropagation()}>
      <Box>
        <Header>
          <div onClick={()=>setIsModalOpen(false)}>×</div>
          <IconBox>
            <i className="fa-solid fa-gift"></i>
            <a href="https://toss.me/kjbank" target="_blank" className="fa-solid fa-won-sign"></a>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </IconBox>
        </Header>
        <div>
          <Profile>
            <img src={profileImg} />
            <div>장용민</div>
          </Profile>
          <Footer>
            <a href="https://open.kakao.com/o/sjgSKmJf" target="_blank" rel="noreferrer noopener">
              <i className="fa-solid fa-comment"></i>
              <div>1:1채팅</div>
            </a>
            <a href="tel:010-7184-2594" target="_blank" rel="noreferrer noopener">
              <i className="fa-solid fa-phone"></i>
              <div>통화하기</div>
            </a>
            <div onClick={()=>setIsQROpen(true)}>
              <i className="fa-solid fa-video"></i>
              <div>페이스톡</div>
            </div>
          </Footer>
        </div>
        {isQROpen&&
          <QRBox>
            <img src={kakaoQrImg} />
            <button onClick={()=>setIsQROpen(false)}>QR 닫기</button>
          </QRBox>
        }
      </Box>
    </Container>
  )
}
export default Kakaotalk;