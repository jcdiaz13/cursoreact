
export const getNinjaCats = async () => {
  const response = await fetch(
    "https://catfact.ninja/facts"
  );
  const data = await response.json();
  console.log(2222222,data)
  return data.data;
}
export default getNinjaCats;