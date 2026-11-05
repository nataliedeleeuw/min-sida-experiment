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

export const initialer = (namn) =>
  namn.split(" ").map((del) => del[0]).join("").toUpperCase();

export const lasTid = (text) => {
  const antalOrd = text.trim().split(/\s+/).length;
  const minuter = Math.ceil(antalOrd / 200);

  return `Lästid: ${minuter} min`;
};


export const halsning = () => {
  const timme = new Date().getHours();

  if (timme < 6) {
    return "God natt";
  } else if (timme < 10) {
    return "God morgon";
  } else if (timme < 18) {
    return "Hej";
  } else {
    return "God kväll";
  }
};
