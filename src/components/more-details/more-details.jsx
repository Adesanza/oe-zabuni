import './more-details.css';

const MoreDetails = () => {
    return (
        <center>
            <p className="more-details-header">LION</p>
            <div>
                <img className="lolo" src="https://res.cloudinary.com/adesanza/image/upload/v1617877527/zabuni/Group_2114_r3npfs.svg" alt=""/>
                <p>Live Stream</p>
            </div>
            <div className="">
                <div className="row justify-content-between dayo">
                    <p>Name: Lion </p>
                    <p>Type: LED</p>
                    <p>Status: Active</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>Category: Billboard </p>
                    <p>Class: Digital</p>
                    <p>Region: SouthEast</p>
                </div>
                <div className="row dayo">
                    <p>Location:<span className="dayo-add"> Ikorodu/Western Avenue at Abati Barracks Near Ojuelegba</span></p>
                </div>
                <div className="row dayo">
                    <p>Height: 20 metre, 1250 pixel</p>
                </div>
                <div className="row dayo">
                    <p>Width: 20 metre, 1250 pixel</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>Faces: 3</p>
                    <p>Slots: 1</p>
                    <p>Units: 1</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>State: Lagos State</p>
                    <p>LGA: Municapal Area Council</p>
                </div>
                <div className="row justify-content-between dayo">
                    <p>City: Ogba</p>
                    <p>Coordinate: 7.12344324, 6.12345678</p>
                </div>
                <div className="row dayo">
                    <p>Amount: 100,000,000 /per annum</p>
                </div>
           </div>
        </center>
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