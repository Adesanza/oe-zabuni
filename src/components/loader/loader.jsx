import { LoaderRingComponent, Ring } from './loader.style';

const RingLoader = ({ borderColor }) => (
  <LoaderRingComponent>
    <Ring borderColor={borderColor} />
    <Ring borderColor={borderColor} />
    <Ring borderColor={borderColor} />
  </LoaderRingComponent>
);

export default RingLoader;
