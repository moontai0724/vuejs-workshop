export default class MessageFakerService {
  generate() {
    let messages = [];

    for (let i = 1; i <= 100; i++)
      messages.push({
        author: this.nameGenerator(),
        time: this.timeGenerator(),
        content: `Index ${i} in 100 messages. `.repeat(
          Math.round(Math.random() * 20) + 1
        ),
      });

    return messages.sort((a, b) => new Date(a.time) - new Date(b.time));
  }

  nameGenerator() {
    return Math.random()
      .toString(36)
      .substring(Math.round(Math.random() * 10));
  }

  timeGenerator() {
    let random = Math.round(Math.random() * 1000000000000 + 1000000000000);
    return new Date(random).toISOString();
  }
}
