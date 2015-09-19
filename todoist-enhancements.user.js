// ==UserScript==
// @name            Todoist Enhancements
// @version         1.2
// @description     Brings back square checkboxes, former priority colors and turns off the date parser
// @author          Darek Kay <darekkay@gmail.com>
// @namespace       http://www.eclectide.com
// @downloadURL     https://github.com/darekkay/userscripts/raw/master/todoist-enhancementsuser.js
// @include         http*://*todoist.com/app*
// @grant           GM_addStyle
// @require         https://raw.githubusercontent.com/darekkay/userscripts/master/utils/waitForClass.js
// ==/UserScript==

GM_addStyle(" \
  .amicheckbox { border-radius: 2px !important; width: 13px !important; height: 13px !important; border-width: 1px !important; margin-top: 2px !important; } \
  .priority_1 .amicheckbox { background-color: #fff !important; } \
  .priority_2 .amicheckbox { background-color: #76c6ff !important; border-color: #64a8d9 !important; } \
  .priority_3 .amicheckbox { background-color: #0063a6 !important; border-color: #00548c !important; } \
  .priority_4 .amicheckbox { background-color: #d24726 !important; border-color: #b33d20 !important; } \
");

waitForClass("t_date", removeDate);

function removeDate(node) {
  $(node).click();
}