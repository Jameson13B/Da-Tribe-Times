import styled from "styled-components";
import ReactQuill from "react-quill";
import Datetime from "react-datetime";

export const Container = styled.div`
  background: #f2d2a9;
  border-radius: 5px;
  display: flex;
  height: 75vh;
  flex-wrap: wrap;
  margin: 15px auto;
  padding: 15px;
  text-align: start;
  width: 768px;
`;
export const Title = styled.input`
  font-size: 1.5rem;
  font-weight: bold;
  height: 5%;
  margin-bottom: 10px;
  width: 100%;
`;
export const Sub = styled.input`
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 10px;
  width: 100%;
`;
export const Sidebar = styled.div`
  height: 94%;
  width: 35%;
`;
export const Button = styled.button`
  background: #00b5ad;
  border: 1px solid #00b5ad;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 15px;
  width: 100%;
`;
export const TextArea = styled(ReactQuill)`
  font-size: 1rem;
  height: 85%;
  margin-left: 2%;
  width: 62%;
`;
export const DateTime = styled(Datetime)`
  width: 100%;
  input {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 10px;
    width: 100%;
  }
`;
export const PBlurb = styled.p`
  line-height: 1.25;
  margin-bottom: 10px;
`;
export const FormImg = styled.img`
  border-radius: 10px;
  width: 100%;
`;
