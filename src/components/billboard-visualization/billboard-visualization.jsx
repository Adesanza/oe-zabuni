import _ from 'lodash';
import DoughnutChart from '../doughnut-chart/doughnut-chart';
import PieChart from '../pie-chart/pie-chart';
import CircleVisual from '../svg-circle-visual/svg-circle-visual';
import './billboard-visualization.css';

const BillboardDataVisuals = ({ billboardGeneralInfo: { billboard_info: { billboardClass, billboardStatesStatus, billboardCount, billboardTypes } } }) => {

let billboardDigitalTotal = _.reduce(billboardClass.digital, (result, value) => result + value, 0);
let billboardStaticTotal = _.reduce(billboardClass.static, (result, value) => result + value, 0);

let billboardTypesArr = [
    {
        title: "Bridge panel",
        count: billboardTypes.bridge_panel || 0,
    },
    {
        title: "Eye catcher",
        count: billboardTypes.eye_catcher || 0,
    },
    {
        title: "Gantry",
        count: billboardTypes.gantry || 0,
    },
    {
        title: "LED",
        count: billboardTypes.led || 0,
    },
    {
        title: "Lightbox",
        count: billboardTypes.lightbox || 0,
    },
    {
        title: "Mega board",
        count: billboardTypes.mega_board || 0,
    },
    {
        title: "Portrait",
        count: billboardTypes.portrait || 0,
    },
    {
        title: "Rooftop",
        count: billboardTypes.rooftop || 0,
    },
    {
        title: "Super 48 sheet",
        count: billboardTypes.super48_sheet || 0,
    },
    {
        title: "Ultrawave",
        count: billboardTypes.ultrawave || 0,
    },
    {
        title: "Unipole",
        count: billboardTypes.unipole || 0,
    },
    {
        title: "Video wall",
        count: billboardTypes.video_wall || 0,
    },
    {
        title: "Wall drape",
        count: billboardTypes.wall_drape || 0,
    }
];

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
                                <div className="digital-active">
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
                                <div className="static-active">
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
                    <div className="row">
                        <div className="col types">
                            <p className="types-title">Types</p>
                            <div className="types-container">
                                {
                                    billboardTypesArr.map((billboardType,idx) => (
                                        <div className="types-active" key={billboardType.title}>
                                            <CircleVisual 
                                                bgColor={idx % 2 === 0 ? "#e3bde0" : "#0056b3"}
                                                textColor={idx % 2 === 0 ? "#f5148e" : "#fff"}
                                                text={billboardType.count}
                                            />
                                            <p>{billboardType.title}</p>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 total">
                            <p className="total-title">Total</p>
                            <CircleVisual 
                                bgColor={"#f7f6fb"}
                                textColor={"#f514be"}
                                text={billboardCount} />
                            <p>in <span>{billboardStatesStatus.length}</span>States</p>
                        </div>
                        <div className="col billboards">
                            <p className="billboard-title">Regions and number of Billboards</p>
                            <PieChart />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 lagos">
                            <p>Lagos</p>
                            <div className="">Active</div>
                            <div className="">Inactive</div>
                        </div>
                    </div>
                    </>
    )
}

export default BillboardDataVisuals;