export const Contact = () => {
  return (
    <section className="section-contact">
      <h2 className="container-title"> Contact Us</h2>

      <form action="">
        <input
          type="text"
          required
          autoComplete="false"
          placeholder="Enter your name"
          name="username"
        />

        <input
          type="email"
          className="form-control"
          autoComplete="false"
          placeholder="Enter your Email"
          name="email"
          required
        />

        <textarea className="form-control"
        rows="10" 
        name="message" 
        placeholder="Enter your message"
        required
        autoComplete="false"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};
