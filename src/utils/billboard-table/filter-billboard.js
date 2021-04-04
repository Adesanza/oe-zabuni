const billboardFilter = (filterData,billboardData) => {
    switch (filterData.type) {
        case 'search':
            return billboardData.filter(details => details.name.toLowerCase().includes(filterData.keyword.toLowerCase()));
        case 'category':
            return billboardData.filter(details => details.category.toLowerCase() === filterData.keyword.toLowerCase());
        default:
            return billboardData;
    }
}

export { billboardFilter };