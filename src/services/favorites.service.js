const FavoritesService = {
  getUserFavorites: userId => {
    const favoritesUrl = `http://localhost:8080/api/users-favorites/${userId}`;
    return fetch(favoritesUrl).then(response => response.json());
  },
  addFavorite: (userId, riverId) => {
    // delete
  },
  deleteFavorite: (userId, riverId) => {
    // delete
  }
};

export default FavoritesService;
