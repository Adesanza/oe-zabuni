import { useSelector } from "react-redux";
import { formatBillboardType } from "../../utils/billboard-table/format-text";
import './more-details.css';

const MoreDetails = () => {
    const formDataState = useSelector(state => state.billboardForm);
    const { formData } = formDataState;
    return (
        <div>
            <p className="more-details-header">{formData.name}</p>
            <div>
                <img className="lolo" src="https://res.cloudinary.com/adesanza/image/upload/v1617877527/zabuni/Group_2114_r3npfs.svg" alt=""/>
                <p>Live Stream</p>
            </div>
            <div className="">
                <div className="row justify-content-between dayo">
                    <p>Name: {formData.name} </p>
                    <p>Type: {formatBillboardType(formData.type)}</p>
                    <p>Status: {formData.status}</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>Category: {formData.category}</p>
                    <p>Class: {formData.class}</p>
                    <p>Region: {formData.region}</p>
                </div>
                <div className="row dayo">
                    <span>Location:</span><span className="dayo-add">{formData.location}</span>
                </div>
                <div className="row dayo">
                    <p>Height: {`${formData.height_m} metre${formData.class === 'digital' ? `, ${formData.height_px} pixel` : ''}`}</p>
                </div>
                <div className="row dayo">
                    <p>Width: {`${formData.width_m} metre${formData.class === 'digital' ? `, ${formData.width_px} pixel` : ''}`}</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>Faces: {formData.face}</p>
                    <p>Slots: {formData.slot}</p>
                    <p>Units: {formData.unit}</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>State: {formData.state}</p>
                    <p>LGA: {formData.lga}</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>City: {formData.city}</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>Coordinate: {formData.coordinate}</p>
                </div>
                <div className="row dayo">
                    <p>Amount: {formData.amount} /per annum</p>
                </div>
           </div>
        </div>
        // <div className='more-details-container'>
        //     <div className="content">
        //         <p className='billboard-name'>lion</p>
        //         <div className="billboard-img-area">
        //             <p className="upper-width">Width: <span>42 metre</span><br/><span>4500 pixel</span></p>
        //             <p className="left-width">
        //                 <span>20metre</span><br/>
        //                 <span>1250pixel</span>
        //             </p>
                    
        //             <div className="billboard-image-container">
        //                  <img src="https://res.cloudinary.com/adesanza/image/upload/v1617877527/zabuni/Group_2114_r3npfs.svg" alt="billboard preview" />
    );
}
export default MoreDetails;