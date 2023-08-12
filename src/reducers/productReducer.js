const initialState = {
    departmentFilter:"All",
    onlyLowStock:false,
    sortBy:"",
}

export const reducer = (state, action) => {
    switch(action.type){
        case"FILTER_BY_DEPARTMENT":{
            return{...state, departmentFilter: action.payload}
        }
        case"FILTER_BY_STOCK":{
            return{...state, onlyLowStock: action.payload}
        }
        case"SORT":{
            return{...state, sortBy: action.payload}
        }

    }
}