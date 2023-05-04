import styled from "styled-components";

export const Container = styled.div`
  background: #d5b4b4;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  font-size: 30px;
  font-family: "helvetica neue";
  color: aliceblue;
  font-weight: bold;
  padding: 18px;
  text-align: center;
  letter-spacing: 2px;
  @media (max-width: 425px) {
    flex-direction: column;
    font-size: 20px;
  }
`;
