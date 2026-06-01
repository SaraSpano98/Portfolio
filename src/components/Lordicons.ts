const basePath = '/assets/icons';

export const LordIcons = {
  clock: `${basePath}/clock.json`,
  computer: `${basePath}/computer.json`,
  consultation: `${basePath}/consultation.json`,
  email: `${basePath}/email.json`,
  github: `${basePath}/github.json`,
  globe: `${basePath}/globe.json`,
  linkedin: `${basePath}/linkedin.json`,
  meeting: `${basePath}/meeting.json`,
  project: `${basePath}/project.json`,
  rocket: `${basePath}/rocket.json`,
  search: `${basePath}/search.json`,
  star: `${basePath}/star.json`,
  telephone: `${basePath}/telephone.json`,
  tool: `${basePath}/tool.json`,
  whatsapp: `${basePath}/whatsapp.json`,
  hand: `${basePath}/hand.json`,
};

// Questa funzione scaricherà il vero oggetto JSON partendo dal percorso sopra
export const fetchIconData = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Errore nel caricamento dell'icona:", error);
    return null;
  }
};
