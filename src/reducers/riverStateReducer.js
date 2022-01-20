export const riverStateReducer = (state, action) => {
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
      userFavorites: [...state.userFavorites, action.payload.id]
    };
  }

  if (action.type === "REMOVE_FROM_FAVORITES") {
    const filteredUserFavorites = state.userFavorites.filter(
      riverId => riverId !== action.payload.id
    );
    return {
      ...state,
      userFavorites: filteredUserFavorites
    };
  }

  if (action.type === "SHOW_FAVORITES") {
    const displayFavoritesArr = state.rivers.filter(river => {
      if (state.userFavorites.includes(river.id)) {
        return river;
      }
    });
    return {
      ...state,
      displayRivers: displayFavoritesArr
    };
  }

  if (action.type === "SHOW_EXPLORE") {
    return {
      ...state,
      displayRivers: state.rivers
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
  return state;
};
