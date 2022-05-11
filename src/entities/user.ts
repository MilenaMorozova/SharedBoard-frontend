class User {
  id = '';

  color = '';

  username = '';

  email = '';

  get shortUsername(): string {
    return this.username[0];
  }
}

export default User;
