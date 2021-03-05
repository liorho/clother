export const timeRefactor = (time) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(time).toLocaleDateString('en-US', options);
};
