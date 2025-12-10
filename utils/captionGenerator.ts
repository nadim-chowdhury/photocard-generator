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
  } else if (template === "wanted") {
    return [
      `WANTED: CAUGHT IN 4K 📸\n\n${content}\n\n${hashtags}`,
      `REWARD $1M for anyone who can explain this behavior. 🤠\n\n${content}\n\n${hashtags}`,
      `OUTLAW ACTIVITY DETECTED. 🌵\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "music") {
    return [
      `Now Playing: My honest feelings 🎵\n\n${content}\n\n${hashtags}`,
      `This track has been on repeat all day. 🎧\n\n${content}\n\n${hashtags}`,
      `Vibe check passed. ✅\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "achievement") {
    return [
      `🏆 ACHIEVEMENT UNLOCKED: Said the Quiet Part Out Loud\n\n${content}\n\n${hashtags}`,
      `Gamerscore +1000 for this take. 🎮\n\n${content}\n\n${hashtags}`,
      `New High Score Detected. 🌟\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "notification") {
    return [
      `🔔 NEW MESSAGE: You need to see this.\n\n${content}\n\n${hashtags}`,
      `POV: Your phone when I post. 📱\n\n${content}\n\n${hashtags}`,
      `Missed Call from: THE TRUTH 📞\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "newspaper") {
    return [
      `📰 EXTRA! EXTRA! Read all about it!\n\n${content}\n\n${hashtags}`,
      `Front page news right here. 🗞️\n\n${content}\n\n${hashtags}`,
      `The Daily Meme: "It's true because I printed it." 🖊️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "definition") {
    return [
      `New word added to the dictionary. 📖\n\n${content}\n\n${hashtags}`,
      `Educate yourself. 🤓\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "error") {
    return [
      `TASK FAILED SUCCESSFULLY. 💿\n\n${content}\n\n${hashtags}`,
      `System Crash Imminent. 💻\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "fact") {
    return [
      `🚨 COMMUNITY NOTE ADDED.\n\n${content}\n\n${hashtags}`,
      `The council has decided this is cap. 🧢\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "review") {
    return [
      `⭐ 1/5 Stars. Would not recommend.\n\n${content}\n\n${hashtags}`,
      `I'd like to speak to the manager. 🗣️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "search") {
    return [
      `🔍 Search Results: Zero logic found.\n\n${content}\n\n${hashtags}`,
      `Did you mean: Clownery? 🤡\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "receipt") {
    return [
      `🧾 Here are the receipts.\n\n${content}\n\n${hashtags}`,
      `Caught in 4k. No refunds.\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "nutrition") {
    return [
      `⚠️ WARNING: Contains 100% Artificial Intelligence.\n\n${content}\n\n${hashtags}`,
      `Nutritional facts: 0g substance.\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "warning") {
    return [
      `☣️ BIOHAZARD DETECTED.\n\n${content}\n\n${hashtags}`,
      `Proceed with caution. 🚧\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "wiki") {
    return [
      `[Citation Needed] 📚\n\n${content}\n\n${hashtags}`,
      `The free encyclopedia that anyone can edit. 🌍\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "chart") {
    return [
      `📈 The data doesn't lie.\n\n${content}\n\n${hashtags}`,
      `Source: Trust me bro.\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "fps") {
    return [
      `360 No-scoped. 🎯\n\n${content}\n\n${hashtags}`,
      `Get good, scrub. 💀\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "visualnovel") {
    return [
      `Senpai noticed you... and is disappointed. 🌸\n\n${content}\n\n${hashtags}`,
      `Dating Sim Bad Ending speedrun. 💔\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "tcg") {
    return [
      `I activate my Trap Card! 🃏\n\n${content}\n\n${hashtags}`,
      `Rare Holo Drop. ✨\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "shop") {
    return [
      `Khajiit has wares, if you have coin. 🐱\n\n${content}\n\n${hashtags}`,
      `No refunds on this opinion. 💰\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "fighter") {
    return [
      `Choose your fighter! 🥊\n\n${content}\n\n${hashtags}`,
      `Ready? Fight! ⚔️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "quest") {
    return [
      `Quest Failed: Touch Grass. 🌿\n\n${content}\n\n${hashtags}`,
      `New Objective: Cope. 📜\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "inventory") {
    return [
      `Inventory Full: Too much audacity. 🎒\n\n${content}\n\n${hashtags}`,
      `Item Stats: -100 Intelligence. 📉\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "rts") {
    return [
      `You require more vespene gas. ⛽\n\n${content}\n\n${hashtags}`,
      `Unit Stats: 0 Defense, All Attack. 🛡️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "vs") {
    return [
      `A subtle battle of wits. ⚔️\n\n${content}\n\n${hashtags}`,
      `Top 10 Anime Betrayals. 📺\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "loot") {
    return [
      `Orange Legendary Drop! 🧡\n\n${content}\n\n${hashtags}`,
      `Best loot in the dungeon. 🗝️\n\n${content}\n\n${hashtags}`,
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
