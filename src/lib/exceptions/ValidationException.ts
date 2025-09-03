export default class ValidationException {
   message: object = {};
   constructor(message: object) {
      this.message = message;
   }
}
