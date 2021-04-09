const billboardFilter = (filterData,billboardData,tablePage,tableSize) => {
    switch (filterData.type) {
        case 'search':
            return paginateBillboard(tablePage,tableSize,billboardData.filter(details => details.name.toLowerCase().includes(filterData.keyword.toLowerCase())));
        case 'category':
            return paginateBillboard(tablePage, tableSize,billboardData.filter(details => details.category.toLowerCase() === filterData.keyword.toLowerCase()));
        default:
            return paginateBillboard(tablePage,tableSize,billboardData);
    }
}

const paginateBillboard = (tablePage, tableSize, data) => {
    let result = data.slice((tablePage - 1) * tableSize, tablePage * tableSize);
    let pageEnd = false;
    
    if(result.length < tableSize) pageEnd  = true;

    return {
        result,
        pageEnd
    };
}

export { billboardFilter };