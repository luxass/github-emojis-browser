import { EMOJI_KEYS, get, getUrl, isUnicodeUrl } from "github-emojis";

export const emojis = EMOJI_KEYS.map((key) => {
  const emojiUrl = getUrl(key);
  return {
    emojiKey: key,
    emoji: get(key),
    emojiUrl,
    isUnicode: isUnicodeUrl(emojiUrl),
  };
});
