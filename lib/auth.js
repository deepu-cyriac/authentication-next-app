import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users", //table name which store user data
  session: "sessions", //table name which store session data
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production", //only run when using https
    },
  },
});
