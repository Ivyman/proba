import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { IStudio } from "@src/types/studio";

import { Wrapper } from "./elements";

export const ItemBox: React.FC<{
  studiosList: IStudio[];
  id?: string;
}> = ({ studiosList }) => {
  const { studioId } = useParams();
  const { goBack } = useHistory();

  const { logo, name, contact, description } = studiosList.find((item: IStudio) => item.id === studioId) as IStudio;

  return (
    <Wrapper>
      <button onClick={() => goBack()}>powrót</button>
      <div>
        <img src={logo} />
        <h2>{name}</h2>
      </div>
      <div>
        <h3>Kontakty</h3>
        <ul>
          {Object.values(contact).map((value: string) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Opis</h3>
        <p>{description}</p>
      </div>
    </Wrapper>
  );
};
