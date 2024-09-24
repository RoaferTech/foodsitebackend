class Email {
    constructor({ name, email,subject, message }) {
      this.name = name;
      this.email = email;
      this.subject = subject;
      this.message = message;
  
      this.validate();
    }
    validate() {
      if (!this.name || !this.email || !this.subject || !this.message) {
        throw new Error('All fields are required.');
      }
  
      if (!this.isValidEmail(this.email)) {
        throw new Error('Invalid email format.');
      }
  
      if (this.message.length < 10) {
        throw new Error('Message should be at least 10 characters long.');
      }
    }
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    formatEmail() {
      return `
        You have a new message from ${this.name} (${this.email}):
        -------------------------------------
        ${this.subject}
        -------------------------------------
        ${this.message}
        -------------------------------------
      `;
    }
  }
  
  export default Email;
  