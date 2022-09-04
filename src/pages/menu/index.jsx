import React from "react";
import { ITEMSMENU } from "../../assets/menu";
import * as S from "./styles";

const Menu = () => {
  return (
    <S.Container>
      <S.Title>
        <p>Rocket</p>
        <p>Coffee</p>
      </S.Title>
      <S.Subtitle>Aberto todos os dias. 8h - 21h</S.Subtitle>
      <S.Menu>
        {Object.entries(ITEMSMENU).map(([section, products]) => (
          <>
            <S.Section>
              <h1>{section}</h1>
            </S.Section>

            {products.map((item) => (
              <S.Item>
                <S.TitleItem>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </S.TitleItem>
                <S.Description>{item.description}</S.Description>
              </S.Item>
            ))}
          </>
        ))}
      </S.Menu>
      <S.Made>
        Made by 🤎
        <a href="https://github.com/eliziebluiz" target="_blank">
          Elizieb Luiz
        </a>
      </S.Made>
    </S.Container>
  );
};
export default Menu;
