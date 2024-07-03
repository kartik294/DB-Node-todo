import { ConnectDB } from "../../lib/config/db.js";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();
export async function GET(request) {
  return NextResponse.json({
    msg: "get method hit",
  });
}
