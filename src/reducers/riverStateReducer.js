export const riverStateReducer = (state, action) => {
  if (action.type === "GET_RIVERS") {
    if (state.userFavorites.length > 0) {
      const favoriteRiverIdsArr = [];
      const favoritedRiverIds = state.userFavorites.forEach(river => favoriteRiverIdsArr.push(river.usgsId));
      
      const loadedRiversFavoriteStatus = action.rivers.map(river => {
        if (favoriteRiverIdsArr.includes(river.usgsId)) {
          river.favorite = true;
          return river;
        }
        return river
      });


      return { ...state, displayRivers: loadedRiversFavoriteStatus, allRivers: loadedRiversFavoriteStatus };
    }

    return { ...state, displayRivers: action.rivers, allRivers: action.rivers };
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
    console.log(action.riverData)
    action.riverData.favorite = true;
    console.log(action.riverData)
    return {
      ...state,
      userFavorites: [...state.userFavorites, action.riverData]
    }
  }

  if (action.type === "REMOVE_FROM_FAVORITES") {
    action.riverData.favorite = false;
    const removedFromFavorites = state.userFavorites.filter(river => river.usgsId !== action.riverData.usgsId);
    const unfavoriteFromAllRivers = state.allRivers.map(river => {
      if (river.usgsId === action.riverData.usgsId) {
        river.favorite = false;
        return river;
      }
      return river;
    });
    
    if (state.tabShowing === 'explore') {
      return {
        ...state,
        userFavorites: removedFromFavorites,
        allRivers: unfavoriteFromAllRivers,
        displayRivers: state.allRivers,
      }
    } else {
      return {
        ...state,
        userFavorites: removedFromFavorites,
        allRivers: unfavoriteFromAllRivers,
        displayRivers: removedFromFavorites,
      }
    }
  }

  if (action.type === "SHOW_EXPLORE") {
    return {
      ...state,
      displayRivers: state.allRivers,
      tabShowing: 'explore'
    };
  }

  if (action.type === "SHOW_FAVORITES") {
    return {
      ...state,
      displayRivers: state.userFavorites,
      tabShowing: 'favorites'
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
