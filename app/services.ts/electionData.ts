// Fetch election results

export default async function electionResults() {
  "use server";
  const data = await fetch(
    "https://canopy.cbc.ca/live/elections/prov/ON2025/all"
  );
  const results = await data.json();
  return results.data;
}
