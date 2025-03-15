// Data type definitions
export type Party = {
  currentSeats: number;
  displayOrder: number;
  e: elected;
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

export type elected = {
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
