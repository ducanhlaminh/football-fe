enum Role {
  BTV = 'BTV',
  SPONSOR = 'SPONSOR',
}
export class UserEntity {
  username: string;
  role_enum: Role;
  token: string;
  constructor(username: string, role_enum: Role, token: string) {
    this.username = username;
    this.role_enum = role_enum;
    this.token = token;
  }
}
