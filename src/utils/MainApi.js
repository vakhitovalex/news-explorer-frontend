export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // GET /articles
  getArticles() {
    return fetch(this._baseUrl + '/articles', {
      headers: this._headers,
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }
  // POST /articles
  addArticle({ keyword, title, text, date, source, link, image }) {
    return fetch(this._baseUrl + '/articles', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ keyword, title, text, date, source, link, image }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }
  // DELETE /articles/articleId
  deleteArticle(articleId) {
    return fetch(this._baseUrl + '/articles/' + articleId, {
      headers: this._headers,
      method: 'DELETE',
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    );
  }
}
