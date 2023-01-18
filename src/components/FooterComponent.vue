<template>
  <div class="footer">
    <div class="greetings">
      <h3>Langat Emmanuel</h3>

      <h4>Have a great {{ dayOfWeek }}</h4>
    </div>
    <div class="contact-links">
      <a
        href="https://wa.me/+254743520021/?text=Hello%20Emmanuel..."
        target="_blank"
        id="my-button"
        ><font-awesome-icon icon="fa-brands fa-whatsapp" class="fa-icon"
      /></a>
      <a href="https://twitter.com/Manuelkl_" target="_blank" id="my-button"
        ><font-awesome-icon icon="fa-brands fa-twitter" class="fa-icon"
      /></a>
      <a
        href="https://www.instagram.com/manuel_k_l_/"
        target="_blank"
        id="my-button"
        ><font-awesome-icon icon="fa-brands fa-instagram" class="fa-icon sm-no"
      /></a>
      <a href="https://github.com/Manuel-kl" target="_blank" id="my-button"
        ><font-awesome-icon icon="fa-brands fa-github" class="fa-icon sm-no"
      /></a>
      <a href="https://linkedin.com/in/elangat" target="_blank" id="my-button"
        ><font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon sm-no"
      /></a>
      <a href="mailto:mannuehkipkirui@gmail.com" target="_blank" id="my-button"
        ><font-awesome-icon icon="fa-regular fa-envelope" class="fa-icon"
      /></a>
    </div>
  </div>
</template>
  <script>
export default {
  components: {},
  props: {},
  data() {
    return {
      dayOfWeek: new Date().toLocaleDateString("en-US", { weekday: "long" }),
    };
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>

  <style lang='css' scoped>
.footer {
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-family: var(--font-family-roboto);
  text-align: center;
  border-top: 1px solid var(--tile-bg-color);
  padding: 1rem;
}

.footer .greetings {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer .greetings h3 {
  margin: 1rem;
  padding-right: 1rem;
  border-right: 2px groove var(--yellow);
  letter-spacing: 0.2px;
  word-spacing: 5px;
}
.footer .greetings p {
  font-family: var(--font-family-roboto);
}
.footer .contact-links {
  padding: 1rem;
}
.footer .contact-links a {
  color: var(--white);
  padding: 1rem 1.2rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid var(--main-bg-color);
}
.footer .contact-links a:hover {
  color: var(--grass-green);
  background: var(--tile-bg-color);
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
}
@media (max-width: 1275px) {
  .footer {
    position: relative;
  }
}
</style>