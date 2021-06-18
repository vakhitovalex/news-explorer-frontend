export default class NewsApi {
  constructor({ baseUrl, headers, apiKey }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._apiKey = apiKey;
  }

  //GET https://newsapi.org/v2/everything?country=us&apiKey=[your_key]
  getNewsArticles(query) {
    return fetch(this._baseUrl + query, {
      headers: {
        'X-Api-Key': this._apiKey,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }
}
