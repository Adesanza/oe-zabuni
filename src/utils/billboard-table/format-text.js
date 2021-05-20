const formatBillboardType = (type) => {
  switch (type) {
    case 'led':
      return 'LED';
    case 'bridge_panel':
      return 'bridge panel';
    case 'eye_catcher':
      return 'eye catcher';
    case 'mega_board':
      return 'mega board';
    case 'super48_sheet':
      return 'super 48 sheet';
    case 'video_wall':
      return 'video wall';
    case 'wall_drape':
      return 'wall drape';
    default:
      return type;
  }
};

const formatBillboardState = (state) => {
  switch (state) {
    case 'akwa_ibom':
      return 'akwa ibom';
    case 'cross_river':
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

export { formatBillboardType, formatBillboardState, formatBillboardLocation };
