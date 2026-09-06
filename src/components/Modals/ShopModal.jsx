import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import dinofroz from "../../photos/vip-images/dinofroz/vip-dinofroz.webp";
import turkey from "../../photos/cursors/dog.webp";
import shop from "../../photos/hero-header/shop.webp";
import hills from "../../photos/hero-header/hiils.webp"
import faded from "../../photos/fan-art/faded.webp"
const slideIn = keyframes`
  0% { transform: translateY(100%) scale(0.5); opacity: 0; }
  100% { transform: translateY(0%) scale(1); opacity: 1; }
`;

const slideOut = keyframes`
  0% { transform: translateY(0%) scale(1); opacity: 1; }
  100% { transform: translateY(100%) scale(0.5); opacity: 0; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 108, 108, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(255, 108, 108, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 108, 108, 0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
  align-items: center;
  z-index: 2000;
  padding: 10px;
`;

const ShopContainer = styled.div`
  background-color: #3a1a1a;
  color: #fff;
  width: 95%;
  max-width: 1200px;
  max-height: 95vh;
  border-radius: 20px;
  position: relative;
  border: 2px solid #ff6c6c;
  overflow-y: auto;
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.5s ease-out forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff6c6c;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #ff6c6c;
  font-size: 36px;
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;

const ShopTitle = styled.h2`
  color: #fdfdfd;
  letter-spacing: 2px;
  font-size: 25px;
  text-align: center;
`;

const PackList = styled.div`
  display: flex;
  flex-direction: column;
`;

const PackRow = styled.div`
  position: relative;
  border-top: 1px solid #ff6c6c;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 10px;
  min-height: 90px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;
  overflow: hidden;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover {
    box-shadow: -5px 8px 15px rgba(0, 0, 0, 0.4);
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.5); 
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  gap: 6px;
`;

const PackName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1.3;
  color: #eaeaea;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

const ActionWrapper = styled.div`
  max-width: 350px;
`;

const LinkButton = styled.a`
  padding: 5px 12px;
  background: #9000ff;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);

  &:hover {
    background: #930090;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CharacterText = styled.div`
  color: #f8f1c6;
  font-size: 12px;
  font-style: italic;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 10px;
  border-radius: 6px;
  border-left: 3px solid #f3a83b;
  line-height: 1.4;
`;

const AnimatedContent = styled.div`
  animation: ${fadeIn} 0.4s ease-out;
`;

const ShopModal = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };
const packs = [
    {
      id: "domino",
      count: "",
      img: shop,
      isCharacter: true,
    },
    {
      id: "uanimals",
      count: "Допомога тваринам",
      img: turkey,
      buttonText: "Підтримати UAnimals",
      linkUrl: "https://uanimals.org/",
    },
    {
      id: "ecoaction",
      count: "Захист природи",
      img: hills,
      buttonText: "Підтримати Екодію",
      linkUrl: "https://ecoaction.org.ua/",
    },
    {
      id: "ifaw",
      count: "Міжнародний порятунок тварин",
      img: dinofroz,
      buttonText: "Підтримати IFAW",
      linkUrl: "https://www.ifaw.org/",
    },
    {
      id: "greenpeace",
      count: "Захист планети",
      img: faded,
      buttonText: "Підтримати Greenpeace",
      linkUrl: "https://www.greenpeace.org/international/",
    },
    {
      id: "happypaw",
      count: "Притулки для тварин",
      img: turkey,
      buttonText: "Підтримати Happy Paw",
      linkUrl: "https://happypaw.ua/",
    },
  ];
  return (
    <Overlay onClick={handleClose}>
      <ShopContainer $isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <ShopTitle>Замок Доміно</ShopTitle>
        <AnimatedContent>
          <PackList>
            {packs.map((pack) => (
              <PackRow
                key={pack.id}
                $isSpecial={pack.special}
                $bgImage={pack.img}
              >
                <RowContent>
                  {pack.count && <PackName>{pack.count}</PackName>}
                  <ActionWrapper>
                    {pack.isCharacter ? (
                      <CharacterText>
                        Мене звати Доміно, я люблю давне кіно. Підтримай фонди будь ласка!
                      </CharacterText>
                    ) : (
                      <LinkButton href={pack.linkUrl} target="_blank" rel="noopener noreferrer">
                        {pack.buttonText}
                      </LinkButton>
                    )}
                  </ActionWrapper>
                </RowContent>
              </PackRow>
            ))}
          </PackList>
        </AnimatedContent>
      </ShopContainer>
    </Overlay>
  );
};

export default ShopModal;