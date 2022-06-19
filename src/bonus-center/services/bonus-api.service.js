import http from "../../core/services/http-common";
export class BonusApiService {
  getAll() {
    return http.get("/bonusData");
  }

  getById(id) {
    return http.get(`/bonusData/${id}`);
  }

  create(data) {
    return http.post("/bonusData", data);
  }

  update(id, data) {
    return http.put(`/bonusData/${id}`, data);
  }

  delete(id) {
    return http.delete(`/bonusData/${id}`);
  }

  findByuserId(userId) {
    return http.get(`/bonusData?userId=${userId}`);
  }

}
