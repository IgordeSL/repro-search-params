import { Metadata } from "next";

export function generateMetadata({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}): Metadata {
  console.log("[PARALLEL DEFAULT][METADATA]", searchParams, '\n');
  return {
    title: `? ${JSON.stringify(searchParams)}`,
  };
}

export default function ParallelDefault({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) {
  console.log("[PARALLEL DEFAULT]", searchParams, '\n');
  return (
    <>
      <p>PARALLEL DEFAULT</p>
      <p>searchParams: {JSON.stringify(searchParams)}</p>
    </>
  );
}
