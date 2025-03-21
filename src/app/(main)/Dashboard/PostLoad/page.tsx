"use client";

import dynamic from "next/dynamic";

const AddLoad = dynamic(() => import("../../../components/PostLoad/AddLoad"));
export default function PostLoad() {
  return <AddLoad />;
}
