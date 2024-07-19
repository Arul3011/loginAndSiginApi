import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

// export const GET = async () => {
//   const client = await clientPromise;
//   const db = await client.db("testdatabase");
//   const dbresponsre = await db.collection("test").find().toArray();
//   return NextResponse.json({ dbresponsre });
// };
export const POST = async (res) => {
  const clientres = res;
  const clijson = await clientres.json();
  const client = await clientPromise;
  const db = await client.db("testdatabase");
  const dbresponsre = await db.collection("test").insertOne({
    name: clijson.username,
    password: clijson.password,
    email: clijson.email,
  });
  return NextResponse.json({
    dbresponse: dbresponsre.acknowledged,
    userId: dbresponsre.insertedId,
  });
};
