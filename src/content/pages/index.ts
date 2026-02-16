import { registerPage } from "../registry";
import { homePage } from "./home";
import { searchPage } from "./search";
import { guestbookPage } from "./guestbook";
import { webringPage } from "./webring";
import { geocitiesPage } from "./geocities";
import { chatroomPage } from "./chatroom";
import { midiPage } from "./midi";
import { ftpPage } from "./ftp";

let initialized = false;

export function initializePages(): void {
  if (initialized) return;
  initialized = true;

  registerPage(homePage);
  registerPage(searchPage);
  registerPage(guestbookPage);
  registerPage(webringPage);
  registerPage(geocitiesPage);
  registerPage(chatroomPage);
  registerPage(midiPage);
  registerPage(ftpPage);
}
