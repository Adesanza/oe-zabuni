import { useSelector, useDispatch } from 'react-redux';
import { filterBillboardData } from '../../redux/filter-Billboard/filterBillboardReducer';
import './billboard-category.css';

const BillboardCategory = () => {
  const filterBillboardState = useSelector((state) => state.filterBillboard);
  const dispatch = useDispatch();
  return (
    <div className="billboard-category">
      <span
        className={
          filterBillboardState.type !== 'category'
            ? 'display-billboards-active'
            : ''
        }
        onClick={() =>
          dispatch(filterBillboardData({ type: 'all', keyword: '' }))
        }
      >
        {' '}
        All{' '}
      </span>
      <span
        className={
          filterBillboardState.type === 'category' &&
          filterBillboardState.keyword === 'billboard'
            ? 'display-billboards-active'
            : ''
        }
        onClick={() =>
          dispatch(
            filterBillboardData({ type: 'category', keyword: 'billboard' })
          )
        }
      >
        Billboard
      </span>
    </div>
  );
};
export default BillboardCategory;
