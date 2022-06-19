export class StorageService {
  constructor() {}

  setUser(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
  getUser(key) {
    return localStorage.getItem(key);
  }
}
