import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export const GET = () => {
  return NextResponse.json({ test: true });
};

export async function POST(response) {
  const fetchdata = await response;
  const fetdata = await fetchdata.json();
  const client = await clientPromise;
  const db = await client.db("testdatabase");
  if (fetdata) {
    var dbrespinse = await db
      .collection("test")
      .find({ email: fetdata.email })
      .toArray();
  }
  if (dbrespinse.length === 0) return NextResponse.json({ response: false });
  if (dbrespinse[0].password == fetdata.password) {
    return NextResponse.json({ request: true, userId: dbrespinse[0]._id });
  } else {
    return NextResponse.json({ request: false });
  }
}
