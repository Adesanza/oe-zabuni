const billboardFilter = (filterData,billboardData,tablePage,tableSize) => {
    switch (filterData.type) {
        case 'search-by-name':
            return paginateBillboard(tablePage,tableSize,billboardData.filter(details => details.name.toLowerCase().includes(filterData.keyword.toLowerCase())));
        case 'search-by-location':
            return paginateBillboard(tablePage,tableSize,billboardData.filter(details => details.location.toLowerCase().includes(filterData.keyword.toLowerCase())));
        case 'category':
            return paginateBillboard(tablePage, tableSize,billboardData.filter(details => details.category.toLowerCase() === filterData.keyword.toLowerCase()));
        default:
            return paginateBillboard(tablePage,tableSize,billboardData);
    }
}

const paginateBillboard = (tablePage, tableSize, data) => {
    // console.log("paginate",data)
    let result = data.slice((tablePage - 1) * tableSize, tablePage * tableSize);
    let pageEnd = false;
    let nextPage = true;
    if(tablePage === 1 && result.length < tableSize) {
        nextPage = false;
        pageEnd = true;
    }else if(result.length < tableSize) pageEnd  = true;

    return {
        result,
        nextPage,
        pageEnd
    };
}

export { billboardFilter };