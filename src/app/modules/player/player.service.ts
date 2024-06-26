import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}
  getPlayer(data: any = null) {
    // if (!data) {
    //   return this.http.get(environment.API_PLAYER);
    // }
    // var newObj: any = {};
    // for (const [key, value] of Object.entries(data)) {
    //   // Kiểm tra nếu giá trị không rỗng (khác ""), thì thêm vào object mới
    //   if (value !== '') {
    //     newObj[key] = value;
    //   }
    // }
    // return this.http.get(environment.APT_TEAMS, { params: newObj });
    return this.http.get(environment.API_PLAYER);
  }
  createPlayer(data: any) {
    return this.http.post(environment.API_PLAYER, data);
  }
  updatePlayerInfo(data: any) {
    return this.http.put(environment.API_PLAYER + '/' + data.playerId, data);
  }
  deletePlayer(id: number) {
    return this.http.delete(environment.API_PLAYER + '/' + id);
  }
}
