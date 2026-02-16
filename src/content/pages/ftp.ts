import { PageDefinition } from "@/types";

export const ftpPage: PageDefinition = {
  id: "ftp",
  urlKeywords: ["ftp", "archive", "files"],
  tabTitle: "FTP Archive Index",
  content: [
    {
      type: "heading",
      text: "Index of /pub/archive/",
      level: 1,
    },
    {
      type: "html",
      content: [
        "<div style='background:#fff;border:1px solid #808080;padding:8px;font-size:14px;line-height:2'>",
        "<div>📁 <span style='color:#808080'>[Parent Directory]</span></div>",
        "<div>📁 warez/          2024-01-15  &lt;DIR&gt;</div>",
        "<div>📁 images/         2024-01-12  &lt;DIR&gt;</div>",
        "<div>📁 midi/           2024-01-10  &lt;DIR&gt;</div>",
        "<div>📄 readme.txt      2024-01-08  1.2kb</div>",
        "<div>📄 cool_links.html 2024-01-05  4.8kb</div>",
        "<div>📄 secret.zip      2023-12-25  ???kb</div>",
        "</div>",
      ].join(""),
    },
    { type: "hr" },
    {
      type: "paragraph",
      text: "This FTP server is maintained by anonymous volunteers. Please do not abuse bandwidth.",
    },
    {
      type: "link_group",
      links: [
        {
          label: ">> MIDI Archive <<",
          targetPageId: "midi",
          conditions: [{ type: "always" }],
        },
        {
          label: ">> Search Engine <<",
          targetPageId: "search",
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
    { slot: "place", word: "a hidden FTP archive", priority: 2 },
    { slot: "quote", word: "The files are IN the computer", priority: 2 },
  ],
  inboundFrom: ["midi"],
  outboundTo: ["midi", "search", "home"],
};
