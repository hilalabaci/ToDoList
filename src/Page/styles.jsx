import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 70px 0;
  gap: 50px;
  @media (max-width: 425px) {
    width: auto;
    margin: 15px 0;
    padding: 15px;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  padding: 25px;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  @media (max-width: 425px) {
    padding: 5px;
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  padding: 15px;
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
  appearance: none;
  margin: 4px;
`;
export const Label = styled.ul`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: #867070;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
export const Button = styled.button`
  border-radius: 50%;
  border-color: transparent;
  background-color: #867070;
  color: #fff;
  font-size: 30px;
  border-width: 0;
  padding: 10px 19px;
  @media (max-width: 425px) {
    padding: 2px 12px;
    font-size: 25px;
  }
`;
export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 0px 20px;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
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
  letter-spacing: 1px;
  color: #867070;
  flex: 3;

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
    font-size: 18px;
  }
`;
