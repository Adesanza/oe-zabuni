import BillboardsTable from '../billboards-table/billboard-table';
import './billboards-display.css';

const DisplayBillboards = ({showCreate}) => {
    return (
        <div className="display-billboards">
            <span className="select-all"> All </span>
            <span className="select-all1">Billboard</span>
            <BillboardsTable showCreate={showCreate}/>
        </div>
    )
}

export default DisplayBillboards;