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
        class="sm-no"
        ><font-awesome-icon icon="fa-brands fa-instagram" class="fa-icon"
      /></a>
      <a
        href="https://github.com/Manuel-kl"
        target="_blank"
        id="my-button"
        class="sm-no"
        ><font-awesome-icon icon="fa-brands fa-github" class="fa-icon"
      /></a>
      <a
        href="https://linkedin.com/in/elangat"
        target="_blank"
        id="my-button"
        class="sm-no"
        ><font-awesome-icon icon="fa-brands fa-linkedin" class="fa-icon"
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
  mounted() {
    // Add an event listener to track scrolling
    window.addEventListener("scroll", function () {
      // Track a scroll event in Matomo
      window._paq.push(["trackEvent", "Window", "Scroll"]);
    });
    // Add an event listener to track clicks on the button
    document.getElementById("my-button").addEventListener("click", function () {
      // Track a click event in Matomo
      window._paq.push(["trackEvent", "Button", "Click"]);
    });
  },
};
</script>

  <style lang='css' scoped>
.svg-inline--fa {
  width: 1em;
}
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
.footer .greetings h4 {
  font-family: var(--font-family-roboto);
  font-style: italic;
}
.footer .contact-links {
  padding: 1rem;
}
.footer .contact-links #my-button {
  color: var(--white);
  padding: 0.9rem;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  border: 1px solid var(--main-bg-color);
}
.footer .contact-links #my-button:hover {
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
@media (max-width: 600px) {
  .sm-no {
    display: none;
  }
  .footer .greetings {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  .footer .greetings h3 {
    border-right: none;
    padding: 0;
    font-size: 1.4rem;
    margin: 0;
  }
}
</style>