import { PageDefinition } from "@/types";

export const midiPage: PageDefinition = {
  id: "midi",
  urlKeywords: ["midi", "music", "downloads"],
  tabTitle: "FREE MIDI Files!!",
  content: [
    {
      type: "heading",
      text: "~*~ FREE MIDI DOWNLOADS ~*~",
      level: 1,
    },
    {
      type: "paragraph",
      text: "The BIGGEST collection of MIDI files on the internet!! Over 500 songs!!",
    },
    { type: "hr" },
    {
      type: "heading",
      text: "Top Downloads This Week:",
      level: 2,
    },
    {
      type: "html",
      content: [
        "<div style='background:#000;color:#0f0;padding:8px;font-size:14px'>",
        "<div>001. Backstreet Boys - I Want It That Way.mid [12kb] ★★★★★</div>",
        "<div>002. Smash Mouth - All Star.mid [8kb] ★★★★</div>",
        "<div>003. Eiffel 65 - Blue.mid [15kb] ★★★★★</div>",
        "<div>004. Final Fantasy VII - Aerith Theme.mid [6kb] ★★★★★</div>",
        "<div>005. Titanic Theme.mid [9kb] ★★★★</div>",
        "</div>",
      ].join(""),
    },
    { type: "hr" },
    {
      type: "paragraph",
      text: "WARNING: Please do not direct-link to these files!! It uses up my bandwidth!!",
    },
    {
      type: "link_group",
      links: [
        {
          label: ">> Visit the Webring <<",
          targetPageId: "webring",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Back to GeoCities <<",
          targetPageId: "geocities",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> SECRET FTP Archive <<",
          targetPageId: "ftp",
          conditions: [{ type: "click_count_gte", value: 10 }],
        },
      ],
    },
  ],
  adlibKeywords: [
    { slot: "item", word: "MIDI collection", priority: 2 },
  ],
  inboundFrom: ["geocities", "search", "home"],
  outboundTo: ["webring", "geocities", "ftp"],
};
