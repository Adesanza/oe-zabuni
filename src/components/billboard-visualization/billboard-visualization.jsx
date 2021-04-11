import DoughnutChart from '../doughnut-chart/doughnut-chart';
import CircleVisual from '../svg-circle-visual/svg-circle-visual';
import './billboard-visualization.css';

const BillboardDataVisuals = () => {
    return (
        <>
        <div className="row">
            <div className="col-md-6 digital">
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
            <div className="col-md-6 static">
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
            <div className="col-md-12 types">
                <p className="">Types</p>
                <div className="types-container">
                    <CircleVisual />
                    <CircleVisual />
                    <CircleVisual />
                    <CircleVisual />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9"></div>
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