import React from "react";
import styled from "@src/styles";
import Typography from "@src/components/Typography";

type ICatalogItemComponent = React.FunctionComponent<{
  thumbnail?: string;
  name: string;
  address: string;
}>;

const { Head, Text } = Typography;

export const CatalogItem: ICatalogItemComponent = ({
  thumbnail,
  name,
  address,
}) => (
  <>
    {thumbnail && <Thumbnail src={thumbnail} />}
    <Head as="h1">{name}</Head>
    <Text>{address}</Text>
  </>
);

export const Thumbnail = styled.img``;
