class User {
  id = '';
  color = '';
  username = '';
  email = '';

  get shortUsername(): string {
    return this.username[0];
  }

  get shortEmail(): string {
    if (this.email.length > 35) {
      return `${this.email.slice(0, 35)}...`;
    }
    return this.email;
  }

  get isOwnerOfThisBoard(): boolean {
    return false;
  }

  copy() {
    let copiedUser = new User();
    copiedUser.id = this.id;
    copiedUser.color = this.color;
    copiedUser.email = this.email;
    copiedUser.username = this.username;
    return copiedUser;
  }
}

export default User;
