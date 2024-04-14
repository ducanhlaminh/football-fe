import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}
  getTeam(data: any = null) {
    if (!data) {
      return this.http.get(environment.APT_TEAMS);
    }
    var newObj: any = {};
    for (const [key, value] of Object.entries(data)) {
      // Kiểm tra nếu giá trị không rỗng (khác ""), thì thêm vào object mới
      if (value !== '') {
        newObj[key] = value;
      }
    }
    return this.http.get(environment.APT_TEAMS, { params: newObj });
  }
  createTeam(data: any) {
    return this.http.post(environment.APT_TEAMS, data);
  }
  updateTeamInfo(data: any) {
    return this.http.put(environment.APT_TEAMS + '/' + data.teamId, data);
  }
  deleteTeam(id: number) {
    return this.http.delete(environment.APT_TEAMS + '/' + id);
  }
  signUpTournament(data: any) {
    return this.http.post(environment.API_SIGN_UP_TEAM_TOURNAMENTL, data);
  }
}
