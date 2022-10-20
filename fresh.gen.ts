// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/leaderboard.ts";
import * as $1 from "./routes/api/live.ts";
import * as $2 from "./routes/api/questionnaire.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/Leaderboard.tsx";
import * as $$1 from "./islands/Questionnaire.tsx";

const manifest = {
  routes: {
    "./routes/api/leaderboard.ts": $0,
    "./routes/api/live.ts": $1,
    "./routes/api/questionnaire.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/Leaderboard.tsx": $$0,
    "./islands/Questionnaire.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;