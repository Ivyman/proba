import React from "react";

// TODO add Catalod instead ItemCatalog
import CatalagItem from "@src/components/CatalagItem";
const data = [
  {
    thumbnail: "https://via.placeholder.com/150",
    name: "name 1",
    address: "sss",
  },
  {
    thumbnail: "https://via.placeholder.com/150",
    name: "name 2",
    address: "sdghdg dhsadgh ",
  },
  {
    thumbnail: "https://via.placeholder.com/150",
    name: "name 3",
    address: "adfa adf adf",
  },
];

type TCatalogScreen = React.FunctionComponent<{}>;

export const CatalogScreen: TCatalogScreen = () => (
  <>
    Catalog Screen
    <br />
    {data.map(({ thumbnail, name, address }) => (
      <CatalagItem
        key={name}
        thumbnail={thumbnail}
        name={name}
        address={address}
      />
    ))}
  </>
);

export default CatalogScreen;
