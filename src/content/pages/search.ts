import { PageDefinition } from "@/types";

export const searchPage: PageDefinition = {
  id: "search",
  urlKeywords: ["search", "find", "web"],
  tabTitle: "WebCrawler Search",
  content: [
    {
      type: "heading",
      text: "WebCrawler - Search the Internet!",
      level: 1,
    },
    {
      type: "paragraph",
      text: 'The web\'s #1 search engine! Over 2 MILLION pages indexed!',
    },
    { type: "hr" },
    {
      type: "heading",
      text: "Top Search Results:",
      level: 2,
    },
    {
      type: "link_group",
      links: [
        {
          label: "1. Cool Personal Homepage - GeoCities",
          targetPageId: "geocities",
          conditions: [{ type: "always" }],
        },
        {
          label: "2. The Greatest Webring on Earth",
          targetPageId: "webring",
          conditions: [{ type: "always" }],
        },
        {
          label: "3. Online Chat - Talk to People NOW!",
          targetPageId: "chatroom",
          conditions: [{ type: "always" }],
        },
        {
          label: "4. Sign a Guestbook - Leave Your Mark",
          targetPageId: "guestbook",
          conditions: [{ type: "always" }],
        },
      ],
    },
    { type: "hr" },
    {
      type: "paragraph",
      text: "Tip: Try searching for 'cool homepages' or 'free midi files'",
    },
  ],
  adlibKeywords: [
    { slot: "item", word: "search engine" },
  ],
  inboundFrom: ["home"],
  outboundTo: ["geocities", "webring", "chatroom", "guestbook"],
};
