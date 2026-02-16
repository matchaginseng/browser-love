import { PageDefinition } from "@/types";

export const homePage: PageDefinition = {
  id: "home",
  urlKeywords: ["welcome", "home", "internet"],
  tabTitle: "Welcome to the Internet!",
  content: [
    {
      type: "heading",
      text: "~ * ~ Welcome to the World Wide Web ~ * ~",
      level: 1,
    },
    { type: "visitor_counter", count: 13482 },
    {
      type: "paragraph",
      text: "You have reached the INFORMATION SUPERHIGHWAY. Where would you like to go today?",
    },
    { type: "hr" },
    {
      type: "link_group",
      links: [
        {
          label: ">> Search the Web <<",
          targetPageId: "search",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Sign My Guestbook!! <<",
          targetPageId: "guestbook",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Join the Webring <<",
          targetPageId: "webring",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> My GeoCities Page <<",
          targetPageId: "geocities",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Enter the Chat Room <<",
          targetPageId: "chatroom",
          conditions: [{ type: "visited", target: "guestbook" }],
        },
        {
          label: ">> FREE MIDI Files!! <<",
          targetPageId: "midi",
          conditions: [{ type: "click_count_gte", value: 5 }],
        },
      ],
    },
    { type: "hr" },
    // {
    //   type: "html",
    //   content:
    //     "<marquee>Best viewed in Internet Explorer 5.0 at 800x600 resolution</marquee>",
    // },
  ],
  adlibKeywords: [
    { slot: "creature", word: "web surfer" },
    { slot: "place", word: "the Information Superhighway" },
  ],
  outboundTo: ["search", "guestbook", "webring", "geocities", "chatroom"],
};
