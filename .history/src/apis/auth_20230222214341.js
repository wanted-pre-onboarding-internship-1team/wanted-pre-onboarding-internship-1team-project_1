export default class AuthService {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  async signin(email, password) {
    return await this.instance.post('/auth/signin', { email, password });
  }

  async signup(email, password) {
    return await this.instance.post('/auth/signup', {
      email,
      password,
    });
  }
}