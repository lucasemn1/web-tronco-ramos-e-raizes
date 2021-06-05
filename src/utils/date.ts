const MONTHS = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function getStringDateInBrasilizamFormat(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS[date.getMonth()].substr(0, 3).toLowerCase();
  const year = date.getFullYear();

  return `${day} de ${month}. de ${year}`;
}
