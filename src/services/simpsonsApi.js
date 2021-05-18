export async function getQuote() {
  const res = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes?count=num'
  );
  const json = await res.json();

  return {
    character: json[0].character,
    text: json[0].quote,
    image: json[0].image,
  };
}
