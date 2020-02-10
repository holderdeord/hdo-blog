export function getAuthors(names = [], authorData) {
  const authors = [];
  names.forEach((name) => {
    authorData.forEach((author) => {
      if (author.node.name === name) {
        authors.push(author.node);
      }
    });
  });
  return authors;
}
export default getAuthors;
