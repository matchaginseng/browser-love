import { PageDefinition } from "@/types";

export const guestbookPage: PageDefinition = {
  id: "guestbook",
  urlKeywords: ["guestbook", "sign", "visitors"],
  tabTitle: "Sign My Guestbook!",
  content: [
    {
      type: "heading",
      text: "** GUESTBOOK ** - Please Sign!!",
      level: 1,
    },
    {
      type: "paragraph",
      text: "Thanks 4 visiting my site!! Please leave a message so I know you were here!!!",
    },
    { type: "hr" },
    {
      type: "guestbook",
      entries: [
        {
          name: "~*xXCoolDude99Xx*~",
          message: "Awesome site dude!!! Check out mine too!!!",
          date: "03/15/1999",
        },
        {
          name: "SurfGirl2000",
          message: "luv ur page!! the midi music is so cool ^_^",
          date: "02/28/1999",
        },
        {
          name: "WebMaster_Jim",
          message: "Nice use of frames! How did you make that animated background?",
          date: "01/12/1999",
        },
        {
          name: "AngelBaby_xo",
          message: "hiiii!! found ur page thru the webring!! so cool!!!",
          date: "12/05/1998",
        },
      ],
    },
    { type: "hr" },
    {
      type: "link_group",
      links: [
        {
          label: "<< Back to Homepage",
          targetPageId: "home",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Visit the Chat Room <<",
          targetPageId: "chatroom",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Check the Webring <<",
          targetPageId: "webring",
          conditions: [{ type: "always" }],
        },
      ],
    },
  ],
  adlibKeywords: [
    { slot: "character", word: "friendly webmaster" },
    { slot: "emotion", word: "nostalgic" },
  ],
  inboundFrom: ["home", "search"],
  outboundTo: ["home", "chatroom", "webring"],
};
