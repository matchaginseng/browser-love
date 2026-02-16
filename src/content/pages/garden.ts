import { PageDefinition } from "@/types";

export const gardenPage: PageDefinition = {
  id: "garden",
  urlKeywords: ["garden", "flower", "plants"],
  tabTitle: "garden ₊˚ʚ 🌱 ₊˚✧ ﾟ.",
  content: [
    {
      type: "heading",
      text: "my garden ༉˚.",
      level: 1,
    },
    {
      type: "paragraph",
      text: "stay and grow some flowers. 𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊",
    },
    { type: "hr" },
    { type: "garden" },
    { type: "hr" },
    {
      type: "link_group",
      links: [
        {
          label: "<< back to landing",
          targetPageId: "home",
          conditions: [{ type: "always" }],
        },
      ],
    },
  ],
  adlibKeywords: [
    { slot: "item", word: "little garden" },
    { slot: "emotion", word: "tender" },
  ],
  inboundFrom: ["home"],
  outboundTo: ["home"],
};
