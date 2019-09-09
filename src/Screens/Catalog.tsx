import React from "react";
import { connect } from "react-redux";

import { IStudio } from "@src/types/studio";
import EApiStatuses from "@src/types/api";
import { RootState } from "@src/types/store";
import { populateStudios } from "@src/store/studio/actions";
import {
  getStudiosList,
  getPopulatedStatus,
} from "@src/store/studio/selectors";

import Catalog from "@src/components/Catalog";
import Map from "@src/components/Map";

interface IProps {
  studiosList: IStudio[];
  populatedStatus: EApiStatuses;
  populateStudios: () => void;
}

class CatalogScreen extends React.Component<IProps> {
  public componentDidMount() {
    this.props.populateStudios();
  }

  // TODO move this to separete component
  public renderContent = () => {
    const { populatedStatus, studiosList } = this.props;

    switch (populatedStatus) {
      case EApiStatuses.SUCCESS:
        return (
          <>
            <Catalog studiosList={studiosList} />
            <Map />
          </>
        );
      case EApiStatuses.ERROR:
        return "Error";
      case EApiStatuses.IDLE:
      case EApiStatuses.FETCHING:
        return "Pending...";
    }
  };

  public render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state: RootState) => ({
  studiosList: getStudiosList(state),
  populatedStatus: getPopulatedStatus(state),
});

const mapDispatchToProps = { populateStudios };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CatalogScreen);
