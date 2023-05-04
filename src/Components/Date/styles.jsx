import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background: #d5b4b4;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  font-size: 25px;
  font-family: "helvetica neue";
  color: aliceblue;
  font-weight: bold;
  letter-spacing: 2px;
  @media (max-width: 425px) {
    flex-direction: column;
    max-width: fit-content;
  }
`;
