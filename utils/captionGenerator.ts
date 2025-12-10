export const generateCaptions = (
  template: string,
  content: string
): string[] => {
  const hashtags = "#fyp #viral #relatable #gaming #roast";

  if (template === "toxic") {
    return [
      `WARNING: High toxicity levels detected. ☢️ \n\n${content}\n\n${hashtags}`,
      `Who let this bro cook? 💀\n\n${content}\n\n${hashtags}`,
      `Imagine being this person... couldn't be me. 🤡\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "galaxy") {
    return [
      `My brain is operating on frequencies you can't satisfy. 🧠✨\n\n${content}\n\n${hashtags}`,
      `Strictly for the intellectuals. If you don't get it, good luck. 🌌\n\n${content}\n\n${hashtags}`,
      `Accessing infinite knowledge... download complete. 🤖\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "news") {
    return [
      `🚨 BREAKING NEWS 🚨\n\n${content}\n\n${hashtags}`,
      `Developing Story: You won't believe what just happened. 📺\n\n${content}\n\n${hashtags}`,
      `LIVE REPORT: Major truth bombs being dropped. 💣\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "rpg") {
    return [
      `HP: 1/100 | STATUS: Shook ⚔️\n\n${content}\n\n${hashtags}`,
      `A wild hot take appeared! It's super effective! 👾\n\n${content}\n\n${hashtags}`,
      `Quest Updated: Survival Mode Activated 🛡️\n\n${content}\n\n#rpg #pixelart ${hashtags}`,
    ];
  } else {
    // Clean/Viral
    return [
      `Start your day with facts. 💯\n\n${content}\n\n${hashtags}`,
      `Say it louder for the people in the back! 🗣️\n\n${content}\n\n${hashtags}`,
      `No lies detected. ✅\n\n${content}\n\n${hashtags}`,
    ];
  }
};
