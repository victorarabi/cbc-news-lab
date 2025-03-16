// Data type definitions
export type Party = {
  currentSeats: number;
  displayOrder: number;
  e: Elected;
  electedSeats: number;
  englishCode: string;
  englishName: string;
  gain: number;
  hold: number;
  id: number;
  leadingSeats: number;
  loss: number;
  net: number;
  percentageDifference: number;
  previousElected: number;
  previousTotalVotes: number;
  previousTotalVotesPercentage: number;
  priority: number;
  seats: number;
  totalElectedLeadingSeats: number;
  totalVotes: number;
  totalVotesPercentage: number;
  undecided: number;
  upstream_slug: string;
};

export type Elected = {
  colourDarkElected: string;
  colourDarkElectedText: string;
  colourDarkLeading: string;
  colourDarkLeadingText: string;
  colourLightElected: string;
  colourLightElectedText: string;
  colourLightLeading: string;
  colourLightLeadingText: string;
  displayParty: string;
  leaderId: string;
  partyCode: string;
  partyName: string;
  partyNameShort: string;
  winnerParty: string;
};

export type Riding = {
  id: number;
  ridingNumber: number;
  englishName: string;
  totalVoters: number;
  totalPolls: number;
  previousElectedPartyCode: string;
  callerCode: string;
  isCandidatedElected: boolean;
  pollsReported: number;
  totalVotesReported: number;
  candidateVotesLead: number;
  parties: Array<Candidate>;
};

export type Candidate = {
  id: number;
  firstName: string;
  lastName: string;
  partyId: number;
  incumbent: string;
  totalVotes: number;
  totalVotesPosition: number;
  totalVotesPercentageLead: string;
  isAcclaimed: boolean;
  isCandidatedElected: number;
  votesPercentage: string;
  votesLead: number;
  votes: number;
  partyCode: string;
};

export type Activity = {
  id: number;
  riding_id: number;
  title: string;
  description: string;
  icon_text: string;
  icon_party: string;
  created_at: string;
};

export type CloseRace = {
  id: number;
  isPinned: boolean;
};

export type ChartData = {
  name: string;
  value: number;
};

export type ToggleItems = {
  value: string;
  label: string;
};
