const RiversService = {
  getTopRivers: () => {
    const topRiversUrl = "http://localhost:8080/api/top-rivers";

    return fetch(topRiversUrl)
      .then(response => {
        return response.json();
      })
      .then(rivers => {
        return rivers;
      });
  }
};

export default RiversService;
