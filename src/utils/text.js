export const snyggtDatum = (datum) =>
  new Date(datum).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const kortText = (text, max) => {
  if (text.length <= max) {
    return text;
  }

  return `${text.slice(0, max)}...`;
};
export const grader = (temp) => `${temp} °C`;

export const copyright = (namn) =>
  `© ${new Date().getFullYear()} ${namn}`;

export const antalProjekt = (antal, totalt) =>
  `Visar ${antal} av ${totalt} projekt`;

export const fornamn = (namn) => namn.split(" ")[0];