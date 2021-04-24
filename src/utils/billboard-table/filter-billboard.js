const billboardFilter = (filterData, billboardData, tablePage, tableSize) => {
  switch (filterData.type) {
    case 'search-by-name':
      return paginateBillboard(
        tablePage,
        tableSize,
        billboardData.filter((details) =>
          details.name.toLowerCase().includes(filterData.keyword.toLowerCase())
        )
      );
    case 'search-by-location':
      return paginateBillboard(
        tablePage,
        tableSize,
        billboardData.filter((details) =>
          details.location
            .toLowerCase()
            .includes(filterData.keyword.toLowerCase())
        )
      );
    case 'category':
      return paginateBillboard(
        tablePage,
        tableSize,
        billboardData.filter(
          (details) =>
            details.category.toLowerCase() === filterData.keyword.toLowerCase()
        )
      );
    case 'sort-by-header':
      return paginateBillboard(
        tablePage,
        tableSize,
        billboardData.sort((a, b) => {
          let splitKeyword = filterData.keyword.split('-');
          let propA =
            splitKeyword[0] !== 'amount'
              ? a[splitKeyword[0]].toLowerCase()
              : Number(a[splitKeyword[0]].split(' ')[0].replaceAll(/,/g, ''));
          let propB =
            splitKeyword[0] !== 'amount'
              ? b[splitKeyword[0]].toLowerCase()
              : Number(b[splitKeyword[0]].split(' ')[0].replaceAll(/,/g, ''));
          if (splitKeyword[1] === 'desc')
            return propA < propB ? -1 : propA > propB ? 1 : 0;
          return propA > propB ? -1 : propA < propB ? 1 : 0;
        })
      );
    default:
      return paginateBillboard(tablePage, tableSize, billboardData);
  }
};

const paginateBillboard = (tablePage, tableSize, data) => {
  // console.log("paginate",data)
  let result = data.slice((tablePage - 1) * tableSize, tablePage * tableSize);
  let pageEnd = false;
  let nextPage = true;
  if (tablePage === 1 && result.length < tableSize) {
    nextPage = false;
    pageEnd = true;
  } else if (result.length < tableSize) pageEnd = true;

  return {
    result,
    nextPage,
    pageEnd,
  };
};

export { billboardFilter };
