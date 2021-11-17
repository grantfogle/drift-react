export const riverStateReducer = (state, action) => {
    if (action.type === 'RIVER_SELECT') {
        const filteredDisplayedRiver = state.rivers.filter(river => river.river === action.payload.riverName);
        return {
            ...state,
            displayRivers: filteredDisplayedRiver
        }
    }
    if (action.type === 'SHOW_FAVORITES') {
        return state;
    }
    if (action.type === 'WATERSHED_SELECT') {
        const filterDisplayRiversByWatershed = state.rivers.filter(river => river.river === action.payload.watershed);
        return {
            ...state,
            displayRivers: filterDisplayRiversByWatershed
        };
    }
    return state;
}