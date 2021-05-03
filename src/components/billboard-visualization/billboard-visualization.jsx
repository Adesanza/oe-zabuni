import _ from 'lodash';
import { useState } from 'react';
import { formatBillboardType } from '../../utils/billboard-table/format-text';
import ControlBarchartDisplay from '../bar-chart-selection/bar-chart-selection';
import BarChart from '../bar-chart/bar-chart';
import DoughnutChart from '../doughnut-chart/doughnut-chart';
import PieChart from '../pie-chart/pie-chart';
import CircleVisual from '../svg-circle-visual/svg-circle-visual';
import './billboard-visualization.css';

const BillboardDataVisuals = ({
  billboardGeneralInfo: {
    billboard_info: {
      billboardClass,
      billboardStatesStatus,
      billboardCount,
      billboardTypes,
      billboardRegions,
    },
  },
}) => {
  const [currentState, setCurrState] = useState(billboardStatesStatus[0]);
  let billboardDigitalTotal = _.reduce(
    billboardClass.digital,
    (result, value) => result + value,
    0
  );
  let billboardStaticTotal = _.reduce(
    billboardClass.static,
    (result, value) => result + value,
    0
  );

  let billboardTypesArr = [
    {
      title: 'Bridge panel',
      count: billboardTypes.bridge_panel || 0,
    },
    {
      title: 'Eye catcher',
      count: billboardTypes.eye_catcher || 0,
    },
    {
      title: 'Gantry',
      count: billboardTypes.gantry || 0,
    },
    {
      title: 'LED',
      count: billboardTypes.led || 0,
    },
    {
      title: 'Lightbox',
      count: billboardTypes.lightbox || 0,
    },
    {
      title: 'Mega board',
      count: billboardTypes.mega_board || 0,
    },
    {
      title: 'Portrait',
      count: billboardTypes.portrait || 0,
    },
    {
      title: 'Rooftop',
      count: billboardTypes.rooftop || 0,
    },
    {
      title: 'Super 48 sheet',
      count: billboardTypes.super48_sheet || 0,
    },
    {
      title: 'Ultrawave',
      count: billboardTypes.ultrawave || 0,
    },
    {
      title: 'Unipole',
      count: billboardTypes.unipole || 0,
    },
    {
      title: 'Video wall',
      count: billboardTypes.video_wall || 0,
    },
    {
      title: 'Wall drape',
      count: billboardTypes.wall_drape || 0,
    },
  ];

  const pieReduce = _.reduce(
    billboardRegions,
    function (result, value, key) {
      result.regions.push(`${key[0].toUpperCase()}${key.substr(1)}`);
      result.regionCount.push(value);
      return result;
    },
    {
      regions: [],
      regionCount: [],
    }
  );
  const barReduce = _.reduce(
    currentState.types,
    (result, value, key) => {
      result.labels.push(formatBillboardType(value.type));
      result.datasets[0].data.push(value.active || 0);
      result.datasets[1].data.push(value.inactive || 0);
      result.datasets[2].data.push(value.vacant || 0);
      result.datasets[0].backgroundColor.push('#f5148e');
      result.datasets[0].borderColor.push('#f5148e');
      result.datasets[1].backgroundColor.push('#0056b3');
      result.datasets[1].borderColor.push('#0056b3');
      result.datasets[2].backgroundColor.push('#24f25e');
      result.datasets[2].borderColor.push('#24f25e');
      return result;
    },
    {
      labels: [],
      datasets: [
        {
          label: 'Active',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 0,
          barThickness: 9,
          maxBarThickness: 16,
          minBarLength: 1,
        },
        {
          label: 'Inactive',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 0,
          barThickness: 9,
          maxBarThickness: 16,
          minBarLength: 1,
        },
        {
          label: 'Vacant',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 0,
          barThickness: 9,
          maxBarThickness: 16,
          minBarLength: 1,
        },
      ],
    }
  );

  return (
    <>
      <div className="row">
        <div className="col p-0 digital">
          <p className="digital-title">Digital</p>
          <div className="doughnut-container">
            <div className="digital-active">
              <DoughnutChart
                value={billboardClass.digital.active || 0}
                totalValue={billboardDigitalTotal}
                classState="active"
              />
              <p>Active</p>
            </div>
            <div className="static-active1">
              <DoughnutChart
                value={billboardClass.digital.inactive || 0}
                totalValue={billboardDigitalTotal}
                classState="inactive"
              />
              <p>Inactive</p>
            </div>
            <div className="digital-active">
              <DoughnutChart
                value={billboardClass.digital.vacant || 0}
                totalValue={billboardDigitalTotal}
                classState="vacant"
              />
              <p>Vacant</p>
            </div>
          </div>
        </div>
        <div className="col p-0 static">
          <p className="static-title">Static</p>
          <div className="doughnut-container">
            <div className="static-active">
              <DoughnutChart
                value={billboardClass.static.active || 0}
                totalValue={billboardStaticTotal}
                classState="active"
              />
              <p>Active</p>
            </div>
            <div className="static-active1">
              <DoughnutChart
                value={billboardClass.static.inactive || 0}
                totalValue={billboardStaticTotal}
                classState="inactive"
              />
              <p>Inactive</p>
            </div>
            <div className="static-active">
              <DoughnutChart
                value={billboardClass.static.vacant || 0}
                totalValue={billboardStaticTotal}
                classState="vacant"
              />
              <p>Vacant</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row seconder">
        <div className="col total">
          <p className="total-title">Total</p>
          <CircleVisual
            bgColor={'#f7f6fb'}
            textColor={'#f514be'}
            text={billboardCount}
          />
          <p className="state-status-gen">
            in{' '}
            <span className="state-status-num">
              {billboardStatesStatus.length}{' '}
            </span>
            States
          </p>
        </div>
        <div className="col-md-8 types">
          <p className="types-title">Types</p>
          <div className="types-container">
            {billboardTypesArr.map((billboardType, idx) => (
              <div className="types-active" key={billboardType.title}>
                <CircleVisual
                  bgColor={idx % 2 === 0 ? '#e3bde0' : '#0057b377'}
                  textColor={idx % 2 === 0 ? '#f5148e' : '#fff'}
                  text={billboardType.count}
                />
                <p>{billboardType.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row folker">
        <div className="col billboards">
          <p className="billboard-title">Regions and number of Billboards</p>
          <PieChart
            pieLabels={pieReduce.regions}
            pieData={pieReduce.regionCount}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 lagos">
          <ControlBarchartDisplay
            stateData={billboardStatesStatus}
            currState={currentState}
            setCurrState={setCurrState}
          />
          <div className="">
            <BarChart barData={barReduce} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BillboardDataVisuals;
