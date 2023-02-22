export default class AuthService {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  async signin(email, password) {
    return await this.instance.post('/auth/signin', {
      data: { email, password },
    });
  }

  async signup(email, password) {
    console.log(email, password);
    return await this.instance.post('/auth/signup', {
      data: { email, password },
    });
  }
}
