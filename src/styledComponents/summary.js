import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #F2D2A9;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 15px;
  text-align: start;
  width 500px;
`;
export const NewLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
`;
export const Sub = styled.h1`
  color: grey;
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;
  width: 100%;
  &:last-child {
    margin-bottom: 0px;
  }
`;
