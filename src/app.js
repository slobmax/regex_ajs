class Validator {
  constructor(nikname) {
    this.nikname = nikname;
  }

  validateUsername() {
    let result;
    if (/^[a-z]([a-z-_]+\d{0,3})*[a-z]+$/.test(this.nikname)) {
      result = 'Никнейм соответствует требованиям';
    } else {
      result = 'Некорректный никнейм';
    }
    return result;
  }
}

export const user1 = new Validator('user_336-x_545explorer');
export const user2 = new Validator('-55user_336-x_545explorer12');
