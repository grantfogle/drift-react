export const riverStateReducer = (state, action) => {
    if (action.type === 'RIVER_SELECT') {
        const filteredDisplayedRiver = state.rivers.filter(river => river.river === action.payload.riverName);
        return {
            ...state,
            displayRivers: filteredDisplayedRiver
        }
    }
    if (action.type === 'ADD_TO_FAVORITES') {
        return {
            ...state,
            userFavorites: [...state.userFavorites, action.payload.id]
        }
    }

    if (action.type === 'REMOVE_FROM_FAVORITES') {
        const filteredUserFavorites = state.userFavorites.filter(riverId => riverId !== action.payload.id);
        return {
            ...state,
            userFavorites: filteredUserFavorites
        }
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