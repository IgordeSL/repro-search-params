import { Metadata } from "next";

export function generateMetadata({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}): Metadata {
  console.log("[PARALLEL PAGE][METADATA]", searchParams, '\n');
  return {
    title: `? ${JSON.stringify(searchParams)}`,
  };
}

export default function ParallelPage({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) {
  console.log("[PARALLEL PAGE]", searchParams, '\n');
  return (
    <>
      <p>PARALLEL PAGE</p>
      <p>searchParams: {JSON.stringify(searchParams)}</p>
    </>
  );
}
