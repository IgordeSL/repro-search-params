import { Metadata } from "next";

export function generateMetadata({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}): Metadata {
  console.log("[A ROUTE PAGE][METADATA]", searchParams, '\n');
  return {};
}

export default function ARoutePage({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) {
  console.log("[A ROUTE PAGE]", searchParams, '\n');
  return (
    <>
      <p>A ROUTE PAGE</p>
      <p>searchParams: {JSON.stringify(searchParams)}</p>
    </>
  );
}
