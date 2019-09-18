import React from "react";
import { connect } from "react-redux";

import { IStudio, ICoordinate } from "@src/types/studio";
import EApiStatuses from "@src/types/api";
import { RootState } from "@src/types/store";
import { populateStudios } from "@src/store/studio/actions";
import {
  getStudiosList,
  getPopulatedStatus,
} from "@src/store/studio/selectors";

import Screen from "../components/Screen";
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

  public getCoordinates = (studiosList: IStudio[]) =>
    studiosList.reduce(
      (acc: ICoordinate[], current: IStudio) => [
        ...acc,
        {
          id: current.id,
          latitude: current.address.latitude,
          longitude: current.address.longitude,
        },
      ],
      [],
    );

  public render() {
    const { populatedStatus, studiosList } = this.props;

    return (
      <Screen populatedStatus={populatedStatus}>
        <Catalog studiosList={studiosList} />
        <Map markersList={this.getCoordinates(studiosList)} />
      </Screen>
    );
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
