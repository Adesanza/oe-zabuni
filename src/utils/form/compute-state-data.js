import _ from 'lodash';
import stateData from './state-lga';

const getRegionState = (region) => _.keys(stateData[region]);

const getStateLga = (state, region) =>
  _.reduce(
    stateData[region][state],
    (result, value) => {
      result.push(value.lga);
      return result;
    },
    []
  );

const getLgaCity = ({ region, state, lga }) =>
  _.find(stateData[region][state], ['lga', lga]).cities;

export { getRegionState, getStateLga, getLgaCity };
