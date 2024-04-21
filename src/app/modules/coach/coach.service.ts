import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoachService {
  constructor(private http: HttpClient) {}
  getMatch(data: any = null) {
    if (!data) {
      return this.http.get(environment.API_COACH);
    }
    var newObj: any = {};
    for (const [key, value] of Object.entries(data)) {
      // Kiểm tra nếu giá trị không rỗng (khác ""), thì thêm vào object mới
      if (value !== '') {
        newObj[key] = value;
      }
    }
    return this.http.get(environment.API_COACH, { params: newObj });
  }
  createCoach(data: any) {
    return this.http.post(environment.API_COACH, data);
  }
  createTeamMatch(data: any) {
    return this.http.post(environment.API_HOME_AWAY, data);
  }

  updateCoach(data: any) {
    return this.http.put(environment.API_COACH + '/' + data.matchId, data);
  }
  deleteCoach(id: number) {
    return this.http.delete(environment.API_COACH + '/' + id);
  }
}
