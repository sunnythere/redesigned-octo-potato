// For a more robust solution, I would add more here as well as another layer of url validation on the server side
export const simpleValidate = (url) => {
  const begin = url.slice(0,8);
  const end = url.slice(-4);

  if (!['https://', 'http://'].includes(begin)) {
    return false;
  } else if (end !== '.txt') {
    return false;
  }
  return true;
}