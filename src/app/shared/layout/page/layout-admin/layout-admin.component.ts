import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
    faPenToSquare,
    faListCheck,
    faNewspaper,
    faTags,
} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-layout-admin",
    templateUrl: "./layout-admin.component.html",
    styleUrls: ["./layout-admin.component.scss"],
})
export class LayoutAdminComponent implements OnInit {
    role: string | null = "none";
    username: string | null = "none";
    selectedIndex: number = 1;
    constructor(private router: Router) {}
    ngOnInit(): void {
        console.log(localStorage.getItem("role"));
        this.role = localStorage.getItem("role");
        this.username = localStorage.getItem("username");
        // this.inforUser.username = localStorage.getItem('username') || '';
    }
    showFiller = true;
    showSidebar: boolean = true;
    faPenSquare = faPenToSquare;
    faListCheck = faListCheck;
    faNewspaper = faNewspaper;
    faTags = faTags;
    timeOut: any;
    navItem = [
        {
            title: "Đội bóng",
            icon: "assets/icon/article-svgrepo-com.svg",
            sub: [
                {
                    title: "Tất cả các đội",
                    url: "teams-list",
                },
                {
                    title: "Tạo đội bóng mới",
                    url: "teams-create",
                },
                {
                    title: "Đăng ký vào giải đấu",
                    url: "team-signup-tournament",
                },
            ],
        },
        {
            title: "Cầu thủ",
            icon: "assets/icon/article-svgrepo-com.svg",
            sub: [
                {
                    title: "Tất cả cầu thủ",
                    url: "players-list",
                },
                {
                    title: "Tạo đội bóng mới",
                    url: "players-create",
                },
            ],
        },
        {
            title: "Huấn luyện viên",
            icon: "assets/icon/article-svgrepo-com.svg",
            sub: [
                {
                    title: "Tất cả huấn luyện viên",
                    url: "coach-list",
                },
                {
                    title: "Thêm huấn luyện viên",
                    url: "coach-create",
                },
            ],
        },
        {
            title: "Giải dấu",
            icon: "assets/icon/layout-grid-1-svgrepo-com.svg",
            sub: [
                {
                    title: "Danh sách giải đấu",
                    url: "tournament-list",
                },
                {
                    title: "Danh sách đội bóng trong giải",
                    url: "tournament-teams-list",
                },
                {
                    title: "Tạo giải đấu",
                    url: "tournament-create",
                },
            ],
        },
        {
            title: "Trận đá",
            icon: "assets/icon/layout-grid-1-svgrepo-com.svg",
            sub: [
                {
                    title: "Danh sách trận bóng",
                    url: "match-list",
                },
                {
                    title: "Tạo trận",
                    url: "match-create",
                },
            ],
        },
        {
            title: "Tài trợ",
            icon: "assets/icon/layout-grid-1-svgrepo-com.svg",
            sub: [
                {
                    title: "Danh sách tài trợ",
                    url: "sponsors-list",
                },
                {
                    title: "Tạo tài trợ",
                    url: "sponsors-create",
                },
                {
                    title: "Hợp đồng",
                    url: "sponsorShip-list",
                },
            ],
        },
        {
            title: "Ranking",
            icon: "assets/icon/users-svgrepo-com.svg",
            url: "ranking",
            sub: [
                {
                    title: "Bảng xếp hạng",
                    url: "ranking-list",
                },
            ],
        },
    ];
    hover(itemSelect: any) {
        this.navItem.map((item: any) => {
            if (itemSelect.title === item.title) {
                item.opened = true;
            } else {
                item.opened = false;
            }
        });
    }
    selectIndex(index: number) {
        this.selectedIndex = index + 1;
    }
    navigateUrl(item: any, event: any) {
        this.navItem.map((item: any) => {
            item.selected = false;
        });
        console.log(this.navItem);

        item.selected = true;
        event.stopPropagation();
    }
}
