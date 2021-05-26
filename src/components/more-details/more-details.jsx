import { PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatBillboardType } from '../../utils/billboard-table/format-text';
import BillboardPdfDetails from '../pdf-doc/pdf-doc';
import './more-details.css';

const MoreDetails = () => {
  const [billboardPreview, setBillboardPreview] = useState('image-preview');
  const formDataState = useSelector((state) => state.billboardForm);
  const { formData } = formDataState;
  return (
    <div>
      <p className="more-details-header">{formData.name}</p>
      <div>
        {billboardPreview === 'image-preview' ? (
          <img
            className="lolo"
            src={
              formData.image ||
              'https://res.cloudinary.com/tbakare/image/upload/v1621347865/No_image_jykbva.png'
            }
            alt=""
          />
        ) : (
          <p className="lolo">Waiting for video feed...</p>
        )}
      </div>
      <div className="billboard-preview-container">
        <p
          className={`billboard-preview ${
            billboardPreview === 'live-stream' ? 'live-stream-preview' : ''
          }`}
          onClick={() => setBillboardPreview('live-stream')}
        >
          Live stream
        </p>
        <p
          className={`billboard-preview ${
            billboardPreview === 'image-preview' ? 'image-preview' : ''
          }`}
          onClick={() => setBillboardPreview('image-preview')}
        >
          Image
        </p>
      </div>
      <PDFDownloadLink
        document={<BillboardPdfDetails {...formData} />}
        fileName={`${formData.name}-billboard.pdf`}
        className="download-billboard-summary"
      >
        {({ loading, error }) =>
          loading
            ? 'Loading document...'
            : error
            ? 'Failed to create summary'
            : 'Download summary'
        }
      </PDFDownloadLink>
      <div className="">
        <div className="row justify-content-between dayo">
          <p>
            Name: <span className="form-data-style">{formData.name}</span>{' '}
          </p>
          <p>
            Type:{' '}
            <span className="form-data-style">
              {formatBillboardType(formData.type)}
            </span>
          </p>
          <p>
            Status: <span className="form-data-style">{formData.status}</span>
          </p>
        </div>
        <div className="row justify-content-between dayo">
          <p>
            Category:{' '}
            <span className="form-data-style">{formData.category}</span>
          </p>
          <p>
            Class: <span className="form-data-style">{formData.class}</span>
          </p>
          <p>
            Region: <span className="form-data-style">{formData.region}</span>
          </p>
        </div>
        <div className="row dayo">
          <span>Location:</span>
          <span className="dayo-add">{formData.location}</span>
        </div>
        <div className="row dayo">
          <p>
            Height:{' '}
            <strong>
              {`${formData.height_m} metre${
                formData.class === 'digital'
                  ? `, ${formData.height_px} pixel`
                  : ''
              }`}
            </strong>
          </p>
        </div>
        <div className="row dayo">
          <p>
            Width:{' '}
            <strong>
              {`${formData.width_m} metre${
                formData.class === 'digital'
                  ? `, ${formData.width_px} pixel`
                  : ''
              }`}
            </strong>
          </p>
        </div>
        <div className="row justify-content-between dayo">
          <p>
            Faces: <span className="form-data-style">{formData.face}</span>
          </p>
          <p>
            Slots: <span className="form-data-style">{formData.slot}</span>
          </p>
          <p>
            Units: <span className="form-data-style">{formData.unit}</span>
          </p>
        </div>
        <div className="row justify-content-between dayo">
          <p>
            State: <span className="form-data-style">{formData.state}</span>
          </p>
          <p>
            LGA: <span className="form-data-style">{formData.lga}</span>
          </p>
        </div>
        <div className="row justify-content-between dayo">
          <p>
            City: <span className="form-data-style">{formData.city}</span>
          </p>
        </div>
        <div className="row justify-content-between dayo">
          <p>
            Coordinate:{' '}
            <span className="form-data-style">{formData.coordinate}</span>
          </p>
        </div>
        <div className="row dayo">
          <p>
            Amount: <span className="form-data-style">{formData.amount}</span>{' '}
            /per annum
          </p>
        </div>
      </div>
    </div>
  );
};
export default MoreDetails;
