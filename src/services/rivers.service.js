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
  },
  searchForRivers: (riverName, watershedName) => {
    const searchRiversURL = "http://localhost:8080/api/rivers";
    const searchBody = {
      riverName,
      watershedName
    };
    fetch(searchRiversURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: searchBody
    });
  }
};

export default RiversService;
