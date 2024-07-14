import observable from "@riotjs/observable";

const messageService = {
  messages: [],
  add(message) {
    this.messages.push(message);
    this.trigger('messagesAdded', this.messages)
  },
  clear() {
    this.messages = [];
    this.trigger('messagesCleared', this.messages)
  }
};

observable(messageService);

export default messageService;