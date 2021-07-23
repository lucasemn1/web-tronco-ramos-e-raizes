export function generateId() {
  let id = "";

  do {
    id = "_" + Math.random().toString(36).substr(2, 9);
  } while (document.getElementById(id));

  return id;
}
