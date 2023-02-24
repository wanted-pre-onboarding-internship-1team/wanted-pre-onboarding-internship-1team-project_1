export default class AuthService {
  instance;
  constructor(instance) {
    this.instance = instance;
  }

  /**
   *
   * @param {string} email
   * @param {string} password
   * @returns Promise<AxiosResponse<>>
   */
  async signin(email, password) {
    return await this.instance.post('/auth/signin', { email, password });
  }

  /**
   *
   * @param {string} email
   * @param {string} password
   * @returns Promise<AxiosResponse<>>
   */
  async signup(email, password) {
    return await this.instance.post('/auth/signup', {
      email,
      password,
    });
  }
}
