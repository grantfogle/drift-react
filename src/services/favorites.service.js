const FavoritesService = {
  getUserFavorites: userId => {
    const favoritesUrl = "http://localhost:8080/api/favorites";
    return fetch(favoritesUrl)
      .then(response => {
        return response.json();
      })
      .then(rivers => {
        return rivers;
      });
  },
  addFavorite: (userId, riverId) => {
    // delete
  },
  deleteFavorite: (userId, riverId) => {
    // delete
  }
};

export default FavoritesService;
