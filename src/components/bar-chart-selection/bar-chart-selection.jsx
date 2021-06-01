import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { formatBillboardState } from '../../utils/billboard-table/format-text';
// import './bar-chart-selection.css';

/*-------STYLED COMPONENTS*/

const StatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & p {
    text-transform: capitalize;
    cursor: pointer;
    margin-top: 0.854rem;
    color: rgba(52, 41, 41, 0.6);
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;

    &:nth-of-type(${(props) => props.currStateIdx + 1}) {
      border-bottom: 2px solid #0056b3;
      color: #0056b3;
      font-weight: bold;
      padding: 0 0.31rem;
    }
  }
`;

const ArrowContainer = styled('div')`
  font-size: 2rem;

  &:first-child {
    color: ${(props) =>
      props.showPrevious ? '#0056B3' : 'rgba(52, 41, 41, 0.6)'};
    cursor: ${(props) => (props.showPrevious ? 'pointer' : 'default')};

    .cursorsHover {
      cursor: ${(props) => !props.showPrevious && 'default !important'};
    }
  }

  &:last-child {
    color: ${(props) => (props.showNext ? '#0056B3' : 'rgba(52, 41, 41, 0.6)')};
    cursor: ${(props) => (props.showNext ? 'pointer' : 'default')};

    .cursorsHover {
      cursor: ${(props) => !props.showNext && 'default !important'};
    }
  }
`;

/*--------STYLED COMPONENTS--------*/

const ControlBarchartDisplay = ({ stateData, currState, setCurrState }) => {
  const [startCount, setStartCount] = useState(0);
  const [currStateIdx, setcurrStateIdx] = useState(0);
  const [statesToDisplay, setStatesToDisplay] = useState([]);
  const [previous, setPrevious] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    const slicedStates = [...stateData].splice(startCount, 6);

    if (startCount + 6 <= stateData.length) {
      setNext(true);
      setStatesToDisplay(slicedStates);
    } else {
      setStatesToDisplay(slicedStates);
    }
    if (startCount > 0) setPrevious(true);
    else setPrevious(false);
    if (startCount + 6 === stateData.length) {
      setNext(false);
    }
    setCurrState(slicedStates[currStateIdx]);
    //eslint-disable-next-line
  }, [startCount]);

  return (
    <StatesContainer currStateIdx={currStateIdx}>
      <ArrowContainer
        showPrevious={previous}
        onClick={() => {
          if (previous) setStartCount(startCount - 1);
        }}
      >
        <RiArrowLeftSLine />
      </ArrowContainer>
      {statesToDisplay.map((stateObject, idx) => (
        <p
          key={idx}
          onClick={() => {
            setCurrState(stateObject);
            setcurrStateIdx(idx);
          }}
        >
          {formatBillboardState(stateObject.state)}
        </p>
      ))}
      <ArrowContainer
        showNext={next}
        onClick={() => {
          if (next) setStartCount(startCount + 1);
        }}
      >
        <RiArrowRightSLine />
      </ArrowContainer>
    </StatesContainer>
  );
};

export default ControlBarchartDisplay;
