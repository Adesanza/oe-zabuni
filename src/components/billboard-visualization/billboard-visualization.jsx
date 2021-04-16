import _ from 'lodash';
import DoughnutChart from '../doughnut-chart/doughnut-chart';
import CircleVisual from '../svg-circle-visual/svg-circle-visual';
import './billboard-visualization.css';

const BillboardDataVisuals = ({ billboardGeneralInfo: { billboard_info: { billboardClass, billboardStatesStatus, billboardCount } } }) => {

let billboardDigitalTotal = _.reduce(billboardClass.digital, (result, value) => result + value, 0);
let billboardStaticTotal = _.reduce(billboardClass.static, (result, value) => result + value, 0);

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
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>LED</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>Potrait</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                                <div className="types-active">
                                    <CircleVisual />
                                    <p>unipole</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 total">
                            <p className="total-title">Total</p>
                            <CircleVisual text={billboardCount} />
                            <p>in <span>{billboardStatesStatus.length}</span>States</p>
                        </div>
                        <div className="col billboards">
                            <p className="billboard-title">Regions and number of Billboards</p>
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