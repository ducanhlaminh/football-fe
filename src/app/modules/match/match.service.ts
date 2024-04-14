import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private http: HttpClient) {}
  getMatch(data: any = null) {
    // if (!data) {
    //   return this.http.get(environment.API_Match);
    // }
    // var newObj: any = {};
    // for (const [key, value] of Object.entries(data)) {
    //   // Kiểm tra nếu giá trị không rỗng (khác ""), thì thêm vào object mới
    //   if (value !== '') {
    //     newObj[key] = value;
    //   }
    // }
    // return this.http.get(environment.APT_TEAMS, { params: newObj });
    return this.http.get(environment.API_MATCH);
  }
  createMatch(data: any) {
    return this.http.post(environment.API_CREATE_MATCH, data);
  }
  createTeamMatch(data: any) {
    return this.http.post(environment.API_HOME_AWAY, data);
  }

  updateMatchInfo(data: any) {
    return this.http.put(environment.API_MATCH + '/' + data.matchId, data);
  }
  deleteMatch(id: number) {
    return this.http.delete(environment.API_MATCH + '/' + id);
  }
}
