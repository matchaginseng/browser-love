import { PageDefinition } from "@/types";

export const chatroomPage: PageDefinition = {
  id: "chatroom",
  urlKeywords: ["chat", "room", "talk"],
  tabTitle: "The Chat Zone!",
  content: [
    {
      type: "heading",
      text: ">> THE CHAT ZONE <<",
      level: 1,
    },
    {
      type: "paragraph",
      text: "Welcome to the Chat Zone! Talk to other cool people on the internet IN REAL TIME!",
    },
    { type: "hr" },
    {
      type: "heading",
      text: "Chat Log:",
      level: 2,
    },
    {
      type: "html",
      content: [
        "<div style='background:#000;color:#0f0;padding:12px;font-size:14px;line-height:1.8'>",
        "<div><span style='color:#ff0'>[CyberKid98]</span> hey everyone!!! a/s/l?</div>",
        "<div><span style='color:#0ff'>[SurfGirl2000]</span> 15/f/cali!! :)</div>",
        "<div><span style='color:#f0f'>[DarkNinja_X]</span> does anyone know how to make a java applet??</div>",
        "<div><span style='color:#ff0'>[CyberKid98]</span> lol no but check out my geocities page</div>",
        "<div><span style='color:#0ff'>[SurfGirl2000]</span> brb my mom needs the phone</div>",
        "<div><span style='color:#f80'>[WebMaster_Jim]</span> just added a hit counter to my site!!</div>",
        "<div><span style='color:#f0f'>[DarkNinja_X]</span> cool!! whats the url?</div>",
        "<div style='color:#888'>*** SurfGirl2000 has disconnected ***</div>",
        "</div>",
      ].join(""),
    },
    { type: "hr" },
    {
      type: "link_group",
      links: [
        {
          label: ">> Visit CyberKid's GeoCities Page <<",
          targetPageId: "geocities",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Sign the Guestbook <<",
          targetPageId: "guestbook",
          conditions: [{ type: "not_visited", target: "guestbook" }],
        },
        {
          label: ">> Back to the Webring <<",
          targetPageId: "webring",
          conditions: [{ type: "always" }],
        },
        {
          label: "<< Home",
          targetPageId: "home",
          conditions: [{ type: "always" }],
        },
      ],
    },
  ],
  adlibKeywords: [
    { slot: "character", word: "CyberKid98", priority: 1 },
    { slot: "emotion", word: "excited", priority: 1 },
    { slot: "event", word: "Great Chat Room Meetup", priority: 1 },
  ],
  inboundFrom: ["home", "webring", "geocities", "guestbook"],
  outboundTo: ["geocities", "guestbook", "webring", "home"],
};
