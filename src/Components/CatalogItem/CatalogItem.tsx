import React from "react";

import { IStudio } from "@src/types/studio";
import { Thumbnail, Wrapper, StyledLink } from "./elements";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

export const CatalogItem: React.FC<{
  itemData: IStudio;
  onHoveredItem: (id: string | null) => void;
  onOpenItem: (item: IStudio | null) => void;
}> = ({ itemData, onHoveredItem, onOpenItem }) => {
  const handleClick = () => {
    onHoveredItem(null);
    onOpenItem(itemData);
  };

  const {
    id,
    address: { city, zipcode, street },
    name,
    logo,
  } = itemData;

  return (
    <Wrapper
      onMouseOver={() => onHoveredItem(itemData.id)}
      onMouseLeave={() => onHoveredItem("")}
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
