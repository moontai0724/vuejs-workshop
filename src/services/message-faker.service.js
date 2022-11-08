export default class MessageFakerService {
  generate(amount) {
    let messages = [];

    for (let i = 1; i <= amount; i++)
      messages.push({
        author: this.generateName(),
        time: this.generateTime(),
        content: `Index ${i} in ${amount} messages. `.repeat(
          Math.round(Math.random() * 20) + 1
        ),
      });

    return messages.sort((a, b) => new Date(a.time) - new Date(b.time));
  }

  generateName() {
    return Math.random()
      .toString(36)
      .substring(Math.round(Math.random() * 10));
  }

  generateTime() {
    let random = Math.round(Math.random() * 1000000000000 + 1000000000000);
    return new Date(random).toISOString();
  }
}
