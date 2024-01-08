import * as emojis from "unicode-emoji";

export function getCategories() {
  return Object.keys(emojis.getEmojisGroupedBy("category"));
}

// export function getGroups() {
//     return Object.keys(emojis.getEmojisGroupedBy("group"));
// }

// export function getSubgroups() {
//     return Object.keys(emojis.getEmojisGroupedBy("subgroup"));
// }

export function getRandomCategory() {
  const categories = getCategories();
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  console.log(`random category: ${randomCategory}`);
  return categories[Math.floor(Math.random() * categories.length)];
}

function filterEmojisByCategory(category) {
  const categoriesToOmit = getCategories().filter((c) => c !== category);
  const filteredEmojis = emojis.getEmojisGroupedBy("category", {
    category: categoriesToOmit,
  })[category];
  console.log(`there are ` + filteredEmojis.length + ` emojis in ` + category);
  return filteredEmojis;
}

export function getRandomEmoji(category, exclude) {
  const filteredEmojis = filterEmojisByCategory(category);
  const randomEmoji = filteredEmojis[Math.floor(Math.random() * filteredEmojis.length)];
  if (randomEmoji !== exclude) {
    console.log(`random emoji: ${randomEmoji.emoji}`);
    return randomEmoji;
  } else {
    console.log("random emoji is equal to exclude");
    return getRandomEmoji(category, exclude);
  }
}

export function generateChoices(correctChoice, category) {
  const choices = [correctChoice];
  while (choices.length < 4) {
    const randomEmoji = getRandomEmoji(category, correctChoice);
    if (!choices.includes(randomEmoji)) {
      choices.push(randomEmoji);
    }
  }
  const choicesShuffled = shuffleArray(choices);
  return choicesShuffled;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
