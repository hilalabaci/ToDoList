import styled from "styled-components";
export const Box = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  @media (max-width: 425px) {
    padding-top: 0px;
  }
`;
export const Item = styled.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding: 10px;
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  &:before {
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    border: 2px solid;
    border-radius: 0;
    background-color: white;
    border-color: transparent;
    box-sizing: border-box;
    color: #3acfb6;
    content: close-quote;
    display: inline-block;
    height: 12px;
    outline: 2px solid #3acfb6;
    transition-duration: 0.5s;
    transition-property: background-color, border-color;
    width: 12px;
  }
  &:checked:before {
    background-color: #3acfb6;
    border-color: white;
  }
  @media (max-width: 425px) {
  }
`;
export const Label = styled.ul`
  margin: 0;
  padding: 20px 20px 20px 40px;
  font-size: 20px;
  font-weight: 200;
  color: #867070;
`;
export const Button = styled.button`
  min-height: 45px;
  width: 45px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #867070;
  color: #fff;
  font-size: 30px;
  border-width: 0;
  text-align: center;
`;
export const Form = styled.form`
  padding-top: 15px;
  text-align: center;
  margin-left: 20px;
  @media (max-width: 425px) {
    padding: 30px 0px 20px 0px;
    margin: 0px;
  }
`;
export const NewItem = styled.input.attrs({ type: "text" })`
  text-align: center;
  height: 60px;
  top: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 200;
  width: 313px;
  letter-spacing: 1px;
  color: #867070;
  &:focus {
    outline: none;
    box-shadow: inset 0 -3px 0 0 #867070;
  }
  &::placeholder {
    color: grey;
    opacity: 0.7;
    letter-spacing: 1px;
  }
  @media (max-width: 425px) {
    width: fit-content;
    height: fit-content;
  }
`;
