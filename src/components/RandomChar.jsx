export const randomChar = () => {
  const str = "qwertyuioplkjhgfdsazxccvbnm";
  return str[Math.floor(Math.random() * str.length)];
};
