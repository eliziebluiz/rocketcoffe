import styled from "styled-components";
import { colors } from "../../assets/consts";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${colors.primary};
  padding-bottom: 1rem;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 2rem;

  > p {
    font-weight: bold;
    font-family: "Roboto Serif", serif;
    font-size: 2rem;
    line-height: 2rem;
    text-transform: uppercase;
    color: ${colors.black};
    margin: 0px;
  }

  p + p {
    color: ${colors.secondary};
  }
`;

export const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: ${colors.black};
`;

export const Section = styled.div`
  width: 100%;
  background: ${colors.tertiary};
  padding: 0.5rem 0rem;
  margin: 2rem 0rem 1.5rem 0rem;

  > h1 {
    font-weight: bold;
    font-family: "Roboto Serif", serif;
    font-size: 1.125rem;
    text-transform: uppercase;
    color: ${colors.black};
    margin: 0px;
  }
`;

export const Menu = styled.ul`
  width: 100%;
  max-width: 18.75rem;
  margin: 0px;
  list-style: none;

  li + li {
    margin-top: 1rem;
  }
`;

export const Item = styled.li`
  list-style: none;
`;

export const Description = styled.p`
  display: flex;
  text-align: left;
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.6);

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 1.313rem;
`;

export const TitleItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;

  > p {
    font-family: "Roboto Serif", serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.125rem;
    color: ${colors.black};
    text-transform: uppercase;
  }
`;
