import React from "react";

import { IStudioAddress } from "@src/types/studio";
import { Thumbnail } from "./elements";
import Typography from "@src/components/Typography";

type ICatalogItemComponent = React.FunctionComponent<{
  thumbnail?: string;
  name: string;
  address: IStudioAddress;
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
    <Text>
      {address.city}, {address.zipcode}, {address.street}
    </Text>
  </>
);
