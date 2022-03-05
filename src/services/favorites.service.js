const FavoritesService = {
  getUserFavorites: userId => {
    const favoritesUrl = `http://localhost:8080/api/favorites/${userId}`;
    return fetch(favoritesUrl).then(response => {
      return response.json();
    });
  },
  addFavorite: (userId, riverId) => {
    const favoriteRiversURL = "http://localhost:8080/api/favorites";
    const favoriteBody = {
      userId,
      usgsId: riverId
    };
    return fetch(favoriteRiversURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(favoriteBody)
    }).then(response => {
      return response.json();
    });
  },
  deleteFavorite: (userId, usgsId) => {
    const favoriteRiversURL = "http://localhost:8080/api/favorites";
    const favoriteBody = {
      userId,
      usgsId
    };
    return fetch(favoriteRiversURL, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(favoriteBody)
    }).then(response => {
      return response.json();
    });
  },
  checkIfFavorited: (rivers, favorites) => {
    // loop through rivers
    //
    // rivers.map(river => {
      // favorites.map(favorite => {
      //   if (river.id === favorite.id) {
      //     return true
      //   }
      // });
    // })
    
    // loop through favorites
    // if river is favorited
    // return favorite as true,
    // update dispatch state
  }
};

export default FavoritesService;
