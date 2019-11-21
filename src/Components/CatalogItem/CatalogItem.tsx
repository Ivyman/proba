import React, { MouseEvent, useState } from "react";

import { IStudio } from "@src/types/studio";
import { Thumbnail, Wrapper, StyledLink } from "./elements";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

export const CatalogItem: React.FC<{
  studioData: IStudio;
  onHoveredStudio: (id?: string) => void;
  onOpenStudio: (id?: string) => void;
}> = ({ studioData, onHoveredStudio, onOpenStudio }) => {
  const [hover, setHover] = useState();

  const handleClick = () => {
    onHoveredStudio();
    onOpenStudio(studioData.id);
  };
  const handleMouseOver = (event: MouseEvent, studioId: string) => {
    if (hover === event.currentTarget) {
      return;
    }
    setHover(event.currentTarget);
    onHoveredStudio(studioId);
  };

  const handleMouseLeave = () => {
    setHover(null);
    onHoveredStudio();
  };

  const {
    id,
    address: { city, zipcode, street },
    name,
    logo,
  } = studioData;

  return (
    <Wrapper
      onMouseOver={event => handleMouseOver(event, studioData.id)}
      onMouseLeave={() => handleMouseLeave()}
      onClick={() => handleClick()}
    >
      <StyledLink to={`/catalog/${id}`}>
        {logo && <Thumbnail src={logo} />}
        <Head as="h1">{name}</Head>
        <Text>
          {city}, {zipcode}, {street}
        </Text>
      </StyledLink>
    </Wrapper>
  );
};
