import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  background-color: #a44d00;
  min-height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-left: 15px;
`;

export const Body = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 90px;
  height: 90px;
  max-width: 100%;
`;
export const SignInButton = styled.button`
  border-radius: 50%;
  cursor: pointer;
  font-size: 0.75rem;
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 90px;
  height: 90px;
  max-width: 100%;
  img {
    height: 20px;
    margin-bottom: 5px;
    width: 20px;
  }
`;
