import React from "react";

import { IStudioAddress } from "@src/types/studio";
import { Thumbnail, Wrapper, StyledLink } from "./elements";
import Typography from "@src/components/Typography";

const { Head, Text } = Typography;

export const CatalogItem: React.FC<{
  id: string;
  thumbnail?: string;
  name: string;
  address: IStudioAddress;
  onHoverItem: (id: string) => void;
}> = ({ id, thumbnail, name, address, onHoverItem }) => (
  <Wrapper onMouseOver={() => onHoverItem(id)} onMouseLeave={() => onHoverItem("")}>
    <StyledLink to={`/catalog/${id}`}>
      {thumbnail && <Thumbnail src={thumbnail} />}
      <Head as="h1">{name}</Head>
      <Text>
        {address.city}, {address.zipcode}, {address.street}
      </Text>
    </StyledLink>
  </Wrapper>
);
