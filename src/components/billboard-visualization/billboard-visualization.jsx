import DoughnutChart from '../doughnut-chart/doughnut-chart';
import CircleVisual from '../svg-circle-visual/svg-circle-visual';
import './billboard-visualization.css';

const BillboardDataVisuals = () => {
    return (
        <>
        <div className="row">
            <div className="col p-0 digital">
                <p className="digital-title">Digital</p>
                <div className="doughnut-container">
                    <div className="digital-active">
                        <DoughnutChart />
                        <p>Active</p>
                    </div>
                    <div className="digital-active">
                        <DoughnutChart />
                        <p>Inactive</p>
                    </div>
                    <div className="digital-active">
                        <DoughnutChart />
                        <p>Vacant</p>
                    </div>
                </div>
            </div>
            <div className="col p-0 static">
                <p className="static-title">Static</p>
                <div className="doughnut-container">
                    <div className="static-active">
                        <DoughnutChart />
                        <p>Active</p>
                    </div>
                    <div className="static-active">
                        <DoughnutChart />
                        <p>Inactive</p>
                    </div>
                    <div className="static-active">
                        <DoughnutChart />
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
                <CircleVisual />
                <p>in <span>18</span>States</p>
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