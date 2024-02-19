import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Roboto", sans-serif;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 400px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 35px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  height: 30px;
  width: calc(100% - 20px);
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #7758dc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 45px;
  font-size: 16px;
`;
export const StyledLink = styled(Link)`
  color: #7758dc;
`;
