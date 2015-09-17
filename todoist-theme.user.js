// ==UserScript==
// @name            Todoist Theme
// @version         1.0
// @description     Brings back square checkboxes and former priority colors.
// @author          Darek Kay <darekkay@gmail.com>
// @namespace       http://www.eclectide.com
// @downloadURL     https://github.com/darekkay/userscripts/raw/master/todoist-theme.user.js
// @include         http*://*todoist.com/app*
// @grant           GM_addStyle
// @require         https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

GM_addStyle(" \
  .amicheckbox { border-radius: 2px !important; width: 13px !important; height: 13px !important; border-width: 1px !important; margin-top: 2px !important; } \
  .priority_1 .amicheckbox { background-color: #fff !important; } \
  .priority_2 .amicheckbox { background-color: #76c6ff !important; border-color: #64a8d9 !important; } \
  .priority_3 .amicheckbox { background-color: #0063a6 !important; border-color: #00548c !important; } \
  .priority_4 .amicheckbox { background-color: #d24726 !important; border-color: #b33d20 !important; } \
");