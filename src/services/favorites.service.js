const FavoritesService = {
  getUserFavorites: userId => {
    const favoritesUrl = `http://localhost:8080/api/users-favorites/${userId}`;
    return fetch(favoritesUrl)
      .then(response => {
        return response.json();
      })
      .then(res => console.log(res));
  },
  addFavorite: (userId, riverId) => {
    const favoriteRiversURL = "http://localhost:8080/api/favorite";
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
  deleteFavorite: (userId, riverId) => {
    const favoriteRiversURL = "http://localhost:8080/api/favorite";
    const favoriteBody = {
      userId,
      riverId
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
  }
};

export default FavoritesService;
