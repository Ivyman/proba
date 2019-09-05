import React from "react";
import { connect } from "react-redux";

import { IStudio } from "@src/types/studio";
import { RootState } from "@src/types/store";
import { populateStudios } from "@src/store/studio/actions";
import { getStudiosList } from "@src/store/studio/selectors";

import CatalagItem from "@src/components/CatalagItem";

interface IProps {
  studiosList: IStudio[];
  populateStudios: () => void;
}

class Catalog extends React.Component<IProps> {
  public componentDidMount() {
    this.props.populateStudios();
  }

  public render() {
    const { studiosList } = this.props;

    return (
      <>
        {studiosList.map(({ id, logo, name, address }) => (
          <CatalagItem
            key={id}
            thumbnail={logo}
            name={name}
            address={address}
          />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  studiosList: getStudiosList(state),
});

const mapDispatchToProps = { populateStudios };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Catalog);
