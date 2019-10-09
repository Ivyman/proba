import React from "react";
import { connect } from "react-redux";

import { RootState } from "@src/types/store";
import {
  getStudiosList,
  getPopulatedStatus,
} from "@src/store/studio/selectors";
import { Wrapper } from "./elements";
import { populateStudios } from "@src/store/studio/actions";

type IFiltersComponent = React.FunctionComponent<{}>;

export const Filters: IFiltersComponent = () => (
  <Wrapper>
    <label>
      Warszawa
      <input type="checkbox" name="city" />
    </label>
    <label>
      Gdansk
      <input type="checkbox" name="city" />
    </label>
    <label>
      Sopot
      <input type="checkbox" name="city" />
    </label>
    <label>
      Gdynia
      <input type="checkbox" name="city" />
    </label>
    <label>
      Wroclaw
      <input type="checkbox" name="city" />
    </label>
    <input type="text" />
  </Wrapper>
);

const mapStateToProps = (state: RootState) => ({
  testProp: () => {},
});

const mapDispatchToProps = { populateStudios };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);
