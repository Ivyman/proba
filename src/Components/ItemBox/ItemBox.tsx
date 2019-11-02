import React from "react";
import { useHistory } from "react-router-dom";

import { IStudio } from "@src/types/studio";

import { Wrapper } from "./elements";

export const ItemBox: React.FC<{
  openedItem: IStudio | null;
  onOpenItem: (item: IStudio | null) => void;
}> = ({ openedItem, onOpenItem }) => {
  const { goBack } = useHistory();

  const handleClick = () => {
    onOpenItem(null);
    goBack();
  };

  return (
    <Wrapper>
      <button onClick={() => handleClick()}>powrót</button>
      {openedItem ? (
        <>
          <div>
            <img src={openedItem.logo} />
            <h2>{openedItem.name}</h2>
          </div>
          <div>
            <h3>Kontakty</h3>
            <ul>
              {Object.values(openedItem.contact).map((value: string) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Opis</h3>
            <p>{openedItem.description}</p>
          </div>
        </>
      ) : (
        <span>No any studio data :(</span>
      )}
    </Wrapper>
  );
};
