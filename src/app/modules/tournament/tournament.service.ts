import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private http: HttpClient) {}
  getTeam(data: any = null) {
    // if (!data) {
    //   return this.http.get(environment.APT_TEAMS);
    // }
    // var newObj: any = {};
    // for (const [key, value] of Object.entries(data)) {
    //   // Kiểm tra nếu giá trị không rỗng (khác ""), thì thêm vào object mới
    //   if (value !== '') {
    //     newObj[key] = value;
    //   }
    // }
    // return this.http.get(environment.APT_TEAMS, { params: newObj });
    return this.http.get(environment.API_TOURNAMENT);
  }
  createTeam(data: any) {
    return this.http.post(environment.API_TOURNAMENT, data);
  }
  updateTeamInfo(data: any) {
    return this.http.put(environment.API_TOURNAMENT + '/' + data.teamId, data);
  }
  deleteTeam(id: number) {
    return this.http.delete(environment.API_TOURNAMENT + '/' + id);
  }
  getTournamentTeams(id: number) {
    return this.http.get(environment.API_TOURNAMENT_TEAM + '/' + id);
  }
  deleteTournamentTeams(tournamentId: number, id: number) {
    return this.http.delete(
      environment.API_TOURNAMENT_TEAM + '/' + tournamentId + '/' + id
    );
  }
}
