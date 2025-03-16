import { Suspense } from "react";
import { Activity, CloseRace, Party, Riding } from "@/app/lib/types";
import electionResults from "@/app/services.ts/electionData";
import App from "@/app/ui/app";
import Loading from "@/app/ui/loading";

export default async function Home() {
  const data = await electionResults();

  const {
    parties,
    ridings,
    activity,
  }: {
    parties: Array<Party>;
    ridings: Array<Riding>;
    activity: Array<Activity>;
  } = await data;
  const { closeRaces }: { closeRaces: Array<CloseRace> } = await data.extras;
  return (
    <Suspense fallback={<Loading />}>
      <App
        parties={parties}
        ridings={ridings}
        closeRaces={closeRaces}
        activity={activity}
      />
    </Suspense>
  );
}
