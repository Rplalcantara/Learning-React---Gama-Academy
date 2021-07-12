import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
  background-color: #ccc;
  padding: 0.5rem;
  margin: 0.1rem 0.1rem;
  width: 20rem;
  border: solid 1px #ddd;
  border-radius: 0.3rem;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: #ccc;
  border: solid 1px #ccc;
  width: 4rem;
  padding: 0.5rem;
  margin: 0.1rem 0.1rem;
  border-radius: 0.3rem;
  font-weight: bold;
`;

export const Error = styled.p`
  color: red;
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  display: block;
  align-items: center;
  justify-content: center;
`
