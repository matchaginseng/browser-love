import { PageDefinition } from "@/types";

export const geocitiesPage: PageDefinition = {
  id: "geocities",
  urlKeywords: ["geocities", "homepage", "cool"],
  tabTitle: "~*My CoOl HoMePaGe*~",
  content: [
    {
      type: "html",
      content:
        "<div style='text-align:center'><span style='font-size:24px;color:#ff00ff'>~*~*~ W E L C O M E ~*~*~</span></div>",
    },
    {
      type: "heading",
      text: "to my AWESOME personal homepage!!",
      level: 2,
    },
    {
      type: "paragraph",
      text: "Hi!! My name is Katie and I am 14 years old. I live in California and I like Backstreet Boys, Beanie Babies, and making web pages!!",
    },
    {
      type: "paragraph",
      text: "This page is UNDER CONSTRUCTION so come back soon for more updates!!!",
    },
    { type: "hr" },
    {
      type: "heading",
      text: "My Favorite Links:",
      level: 2,
    },
    {
      type: "link_group",
      links: [
        {
          label: ">> Sign my Guestbook pleeeease!! <<",
          targetPageId: "guestbook",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Chat with me!! <<",
          targetPageId: "chatroom",
          conditions: [{ type: "visited", target: "guestbook" }],
        },
        {
          label: ">> Cool Webring <<",
          targetPageId: "webring",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Back to Search <<",
          targetPageId: "search",
          conditions: [{ type: "always" }],
        },
      ],
    },
    { type: "hr" },
    {
      type: "html",
      content:
        "<div style='text-align:center;font-size:12px;color:#808080'>Made with Notepad | Last updated 11/23/1999</div>",
    },
  ],
  adlibKeywords: [
    { slot: "quote", word: "Welcome to my homepage!!" },
    { slot: "item", word: "Beanie Baby collection", priority: 1 },
  ],
  inboundFrom: ["search", "webring"],
  outboundTo: ["guestbook", "chatroom", "webring", "search"],
};
