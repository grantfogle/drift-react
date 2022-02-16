export const riverStateReducer = (state, action) => {
  if (action.type === "GET_RIVERS") {
    const riversResArr = action.payload.rivers;
    return { ...state, displayRivers: riversResArr, allRivers: riversResArr };
  }

  if (action.type === "SET_FAVORITES") {
    return {
      ...state,
      userFavorites: action.payload.rivers
    };
  }

  if (action.type === "RIVER_SELECT") {
    const filteredDisplayedRiver = state.rivers.filter(
      river => river.river === action.payload.riverName
    );
    return {
      ...state,
      displayRivers: filteredDisplayedRiver
    };
  }

  if (action.type === "ADD_TO_FAVORITES") {
    return {
      ...state,
      userFavorites: [...state.userFavorites, action.payload]
    };
  }

  if (action.type === "REMOVE_FROM_FAVORITES") {
    const filteredUserFavorites = state.userFavorites.filter(river => {
      if (river.river.usgsId !== action.payload.usgsId) {
        return river;
      }
    });

    return {
      ...state,
      userFavorites: filteredUserFavorites
    };
  }

  if (action.type === "SHOW_EXPLORE") {
    console.log(state.userFavorites, state.displayRivers);
    return {
      ...state,
      displayRivers: state.allRivers
    };
  }

  if (action.type === "SHOW_FAVORITES") {
    console.log(state.userFavorites, state.displayRivers);
    return {
      ...state,
      displayRivers: state.userFavorites
    };
  }

  if (action.type === "WATERSHED_SELECT") {
    const filterDisplayRiversByWatershed = state.rivers.filter(
      river => river.watershed === action.payload.watershed
    );
    return {
      ...state,
      displayRivers: filterDisplayRiversByWatershed
    };
  }

  if (action.type === "RIVERS_RESET") {
    const activeWatershedFilter = action.payload.watershedFilter;
    const resetFiltersCheck = state.rivers.filter(river => {
      if (activeWatershedFilter && activeWatershedFilter === river.watershed) {
        return river;
      }
    });
  }
};
