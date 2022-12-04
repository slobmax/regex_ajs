class Validator {
  constructor(nikname) {
    this.nikname = nikname;
  }

  validateUsername() {
    return /^[a-z]([a-z-_]+\d{0,3})*[a-z]+$/.test(this.nikname);
  }
}

export const userName1 = new Validator('user_336-x_545explorer');
export const userName2 = new Validator('-55user_336-x_545explorer12');
