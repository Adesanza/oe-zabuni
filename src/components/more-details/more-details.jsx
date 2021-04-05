import './more-details.css';

const MoreDetails = () => {
    return (
        <div className='more-details-container'>
            <div className="content">
                <p className='billboard-name'>lion</p>
                <div className="billboard-img-area">
                    <p className="upper-width">Width is <span>42 metre</span><span>4500 pixel</span></p>
                    <p className="left-width">
                        <span>20 metre</span>
                        <span>1250 pixel</span>
                    </p>
                    <div className="billboard-image-container">
                         <img src="https://nmgprod.s3.amazonaws.com/media/files/ea/72/ea72617b8188ed5571c1f20adaec2576/cover_image.jpg.760x400_q85_crop_upscale.jpg" alt="billboard preview"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MoreDetails;