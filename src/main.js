import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Tobias Lübbe",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Failing runs", "Automated testing", "Jenkins"],
    // Which CI/CD tools do you use in your project?
    tools: "None",
    // What do you want to learn in this workshop?
    expectations: ["Learn CI/CD workflows", "Learn about common pain points"],
  },
});
