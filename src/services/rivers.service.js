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
  searchRivers: riverName => {
    const searchRiversURL = "http://localhost:8080/api/rivers";
    const searchBody = {
      riverName
    };
    return fetch(searchRiversURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(searchBody)
    }).then(response => {
      return response.json();
    });
  },
  searchWatershed: watershedName => {
    const searchRiversURL = "http://localhost:8080/api/watershed";
    const searchBody = {
      watershedName
    };
    return fetch(searchRiversURL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(searchBody)
    }).then(response => {
      return response.json();
    });
  }
};

export default RiversService;
