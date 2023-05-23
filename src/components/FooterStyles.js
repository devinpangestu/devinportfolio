import styled from "styled-components";

export const Box = styled.div`
  padding: 45px 0 40px 0;

  position: relative;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: grid;
  max-width: 1000px;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 0;
`;

export const Row = styled.div`
  display: grid;

  grid-gap: 20px;
`;

export const FooterLinkedin = styled.a`
  font-size: 30px;

  align-content: center;
  &:hover {
    color: #2c5cf9;
    transition: 200ms ease-in;
  }
`;
export const FooterInstagram = styled.a`
  font-size: 30px;

  align-content: center;
  &:hover {
    
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`;
