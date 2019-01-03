import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  background-color: #a44d00;
  min-height: 3rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const Title = styled.h1`
  font-size: 2rem;
`;

export const Body = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 15px 0;
  text-align: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 40px;
  width: 100px;
  height: 100px;
  max-width: 100%;
`;
