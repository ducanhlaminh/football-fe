import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn: "root",
})
export class SponsorService {
    constructor(private http: HttpClient) {}
    getSponsor(data: any = null) {
        if (!data) {
            return this.http.get(environment.API_SPONSOR);
        }
        var newObj: any = {};
        for (const [key, value] of Object.entries(data)) {
            // Kiểm tra nếu giá trị không rỗng (khác ""), thì thêm vào object mới
            if (value !== "") {
                newObj[key] = value;
            }
        }
        return this.http.get(environment.API_SPONSOR, { params: newObj });
    }
    getSponsorShip() {
        return this.http.get(environment.API_SPOPNSORSHIP);
    }
    createSponsor(data: any) {
        return this.http.post(environment.API_SPONSOR, data);
    }
    updateSponsorInfo(data: any) {
        return this.http.put(environment.API_SPONSOR + "/" + data.teamId, data);
    }
    deleteSponsor(id_sponsor: number, id_sponsorShip: number) {
        return this.http.delete(
            environment.API_SPONSOR + "/" + id_sponsor + "/" + id_sponsorShip
        );
    }
}
