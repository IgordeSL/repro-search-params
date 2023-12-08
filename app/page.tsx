import { Metadata } from "next";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";

export function generateMetadata({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}): Metadata {
  console.log("[HOMEPAGE][METADATA]", searchParams, "\n");
  return {};
}

export default function HomePage({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) {
  console.log("[HOMEPAGE]", searchParams, "\n");

  if (!searchParams["test"]) {
    redirect("/?test=true", RedirectType.replace);
  }

  return (
    <>
      <p>HOMEPAGE</p>
      <p>searchParams: {JSON.stringify(searchParams)}</p>
      <Link href="/a-route?test=true">Go to a route</Link>
    </>
  );
}
