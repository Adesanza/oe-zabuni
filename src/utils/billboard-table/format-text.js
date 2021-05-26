const formatBillboardType = (type) => {
  switch (type) {
    case 'led':
      return 'LED';
    case 'bridge_panel':
      return 'Bridge Panel';
    case 'eye_catcher':
      return 'Eye catcher';
    case 'mega_board':
      return 'Mega board';
    case 'super48_sheet':
      return 'Super 48 sheet';
    case 'video_wall':
      return 'Video wall';
    case 'wall_drape':
      return 'Wall Drape';
    default:
      return type;
  }
};

const formatBillboardState = (state) => {
  switch (state) {
    case 'akwaibom':
      return 'akwa ibom';
    case 'crossRiver':
      return 'cross river';
    default:
      return state;
  }
};

const formatBillboardLocation = (location) => {
  if (location.length > 15) {
    return `${location.substr(0, 15)}...`;
  }
  return location;
};

const formatBillboardRegion = (region) => {
  return `${region.substr(0, 5)} ${region.substr(5)}`;
};

export {
  formatBillboardType,
  formatBillboardState,
  formatBillboardLocation,
  formatBillboardRegion,
};
