class Github {
  constructor() {
    this.client_id = 'c3f7569a3dbff37ec48f';
    this.client_secret = 'ec769fe56d5c97b1c6ad9265a79948990ea94eb9';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}