import { PageDefinition } from "@/types";

export const webringPage: PageDefinition = {
  id: "webring",
  urlKeywords: ["webring", "links", "cool-sites"],
  tabTitle: "The Ultimate Webring",
  content: [
    {
      type: "heading",
      text: "~~ The Ultimate Cool Sites Webring ~~",
      level: 1,
    },
    {
      type: "paragraph",
      text: "You are visitor #8,432 to this webring! This ring connects the COOLEST pages on the internet.",
    },
    { type: "hr" },
    {
      type: "heading",
      text: "Ring Members:",
      level: 2,
    },
    {
      type: "link_group",
      links: [
        {
          label: "[<< PREV] Cool Homepage on GeoCities",
          targetPageId: "geocities",
          conditions: [{ type: "always" }],
        },
        {
          label: "[NEXT >>] The Chat Zone",
          targetPageId: "chatroom",
          conditions: [{ type: "always" }],
        },
        {
          label: "[RANDOM] Search the Web",
          targetPageId: "search",
          conditions: [{ type: "always" }],
        },
        {
          label: "[HOME] Ring Homepage",
          targetPageId: "home",
          conditions: [{ type: "always" }],
        },
      ],
    },
    { type: "hr" },
    {
      type: "html",
      content:
        "<marquee direction='right'>*** Join our webring! Email webmaster@coolring.net ***</marquee>",
    },
    {
      type: "paragraph",
      text: "This webring is managed by WebRing.org - Connecting the web since 1994!",
    },
  ],
  adlibKeywords: [
    { slot: "event", word: "Great Webring Adventure" },
  ],
  inboundFrom: ["home", "search", "guestbook"],
  outboundTo: ["geocities", "chatroom", "search", "home"],
};
