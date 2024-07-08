import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Clean Code Rule Toolkit",
  description: "Clean Code Study",
  base: "/clean-code-rule-toolkit/",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Introduce", link: "/introduce" },
      { text: "Rules", link: "/add" },
    ],

    sidebar: [
      { text: "Introduce", link: "/introduce" },
      {
        text: "Rules",
        items: [
          {
            text: "jgjgill",
            items: [
              { text: "add", link: "/add" },
              { text: "makeLotto", link: "/makeLotto" },
              { text: "random", link: "/random" },
              { text: "randomInt", link: "/randomInt" },
              { text: "rockPaperScissorsMoving", link: "/rock-paper-scissors" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/fe-clean-code-study/clean-code-rule-toolkit",
      },
    ],
  },
});
