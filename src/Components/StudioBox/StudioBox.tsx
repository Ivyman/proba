import React from "react";

import { IStudio } from "@src/types/studio";

import { Wrapper } from "./elements";

export const StudioBox: React.FC<{
  openedStudio: IStudio | null;
}> = ({ openedStudio }) => (
  <Wrapper>
    {openedStudio ? (
      <>
        <div>
          <img src={openedStudio.logo} alt="logo" />
          <h2>{openedStudio.name}</h2>
        </div>
        <div>
          <h3>Kontakty</h3>
          <ul>
            {Object.values(openedStudio.contact).map((value: string) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Opis</h3>
          <p>{openedStudio.description}</p>
        </div>
      </>
    ) : (
      <span>No any studio data :(</span>
    )}
  </Wrapper>
);
