const getTableHeaderProps = () => {
    const tableHeaderData = [
        {headName:'name', isSorted: true, isSortedDesc: false, isSortedAsc: false},
        {headName:'location', isSorted: false},
        {headName:'type', isSorted: true, isSortedDesc: false, isSortedAsc: false},
        {headName:'height', isSorted: false},
        {headName:'width', isSorted: false},
        {headName:'status', isSorted: false},
        {headName:'category', isSorted: false},
        {headName:'class', isSorted: false},
        {headName:'face', isSorted: false},
        {headName:'slot', isSorted: false},
        {headName:'unit', isSorted: false},
        {headName:'region', isSorted: true, isSortedDesc: false, isSortedAsc: false},
        {headName:'state', isSorted: true, isSortedDesc: false, isSortedAsc: false},
        {headName:'lga', isSorted: false},
        {headName:'city', isSorted: false},
        {headName:'coordinate (LAT/LONG)', isSorted: false},
        {headName:'amount', isSorted: true, isSortedDesc: false, isSortedAsc: false}
    ]
    return {
        getTableHeaderData: () => tableHeaderData
    }
}

export { getTableHeaderProps };