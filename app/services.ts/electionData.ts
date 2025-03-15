// Fetch election results
export default async function electionResults() {
  "use server";

  try {
    const data: Response = await fetch(
      "https://canopy.cbc.ca/live/elections/prov/ON2025/all"
    );
    if (!data.ok) {
      throw new Error("failed to reach endpoint");
    } else {
      const results = await data.json();
      return results.data;
    }
  } catch (err) {
    console.log(err);
  }
}
