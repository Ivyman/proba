import React from "react";

import { IStudio } from "@src/types/studio";
import { Thumbnail, Wrapper, StyledLink } from "./elements";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

export const CatalogItem: React.FC<{
  itemData: IStudio;
  onHoverItem: (id: string) => void;
  onOpenItem: (item: IStudio | null) => void;
}> = ({ itemData, onHoverItem, onOpenItem }) => {
  const handleClick = () => {
    onHoverItem("");
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
      onMouseOver={() => onHoverItem(itemData.id)}
      onMouseLeave={() => onHoverItem("")}
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
