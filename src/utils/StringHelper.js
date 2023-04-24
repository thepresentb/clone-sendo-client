export class StringHelper {
  static toPrice(price) {
    let temp = price;
    const stringArr = [];
    let result = "";
    while (temp !== 0) {
      stringArr.push(temp % 10);
      temp = Math.floor(temp / 10);
    }
    while (stringArr.length !== 0) {
      result += stringArr.pop();
      if (stringArr.length % 3 === 0 && stringArr.length !== 0) result += ".";
    }
    return result;
  }
}
