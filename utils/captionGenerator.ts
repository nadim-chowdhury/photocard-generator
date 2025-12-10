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
  } else if (template === "tube") {
    return [
      `SHOCKING REVELATION! (GONE WRONG) 😱\n\n${content}\n\n${hashtags}`,
      `I can't believe I'm posting this... 🎥\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "clown") {
    return [
      `Dropped my license, has anyone seen it? 🤡\n\n${content}\n\n${hashtags}`,
      `Professional Clown Activity. 🎪\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "chat") {
    return [
      `Left on read. 📱\n\n${content}\n\n${hashtags}`,
      `Group chat leaked. 💬\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "quote") {
    return [
      `So inspiring. 🙌\n\n${content}\n\n${hashtags}`,
      `Live, Laugh, L. ✨\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "stream") {
    return [
      `Are you still watching? 📺\n\n${content}\n\n${hashtags}`,
      `New Season Drop. 🎬\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "credit") {
    return [
      `Card Declined at the Logic Store. 💳\n\n${content}\n\n${hashtags}`,
      `Insufficient Funds (for this take). 💸\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "captcha") {
    return [
      `Please prove you are human. 🤖\n\n${content}\n\n${hashtags}`,
      `I failed the test. ❌\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "wrapped") {
    return [
      `My Year in Review: Embarrassing. 🎁\n\n${content}\n\n${hashtags}`,
      `Top Genre: Bad Takes. 🎵\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "billboard") {
    return [
      `Public Service Announcement. 📢\n\n${content}\n\n${hashtags}`,
      `Renting this space to say... 🏗️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "alert") {
    return [
      `PRESIDENTIAL ALERT. ⚠️\n\n${content}\n\n${hashtags}`,
      `This is not a drill. 🚨\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "notes") {
    return [
      `Screenshotted because this is important. 📝\n\n${content}\n\n${hashtags}`,
      `My official statement. 📋\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "aura") {
    return [
      `The vibes are immaculate. ✨\n\n${content}\n\n${hashtags}`,
      `Aura points +1000. 🔮\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "impact") {
    return [
      `Statement piece. ‼️\n\n${content}\n\n${hashtags}`,
      `BOLD AND LOUD. 🔴\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "terminal") {
    return [
      `Hacking the mainframe... 💻\n\n${content}\n\n${hashtags}`,
      `System Override. 🟢\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "paper") {
    return [
      `From the archives. 🗄️\n\n${content}\n\n${hashtags}`,
      `Classified documents leaked. 📄\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "neon") {
    return [
      `Up all night. 🌃\n\n${content}\n\n${hashtags}`,
      `Glowing different. 💡\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "board") {
    return [
      `Class is in session. 🏫\n\n${content}\n\n${hashtags}`,
      `Take notes. ✏️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "cinema") {
    return [
      `Now Showing: The Truth. 🎥\n\n${content}\n\n${hashtags}`,
      `Coming soon to a timeline near you. 🍿\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "sign") {
    return [
      `Someone had to say it. 🪧\n\n${content}\n\n${hashtags}`,
      `Change my mind. 🗣️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "lock") {
    return [
      `Check your notifs. 🔔\n\n${content}\n\n${hashtags}`,
      `Missed call: Reality. 📱\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "newspaper") {
    return [
      `EXTRA! EXTRA! Read all about it! 📰\n\n${content}\n\n${hashtags}`,
      `Breaking News: The audacity is at an all-time high. 🗞️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "tabloid") {
    return [
      `EXCLUSIVE: Caught in 4K! 📸\n\n${content}\n\n${hashtags}`,
      `You won't believe what happened! 😱\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "magazine") {
    return [
      `Cover Star material. ✨\n\n${content}\n\n${hashtags}`,
      `Issue #1: The Audacity. 📖\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "journal") {
    return [
      `Study finds 100% of people agree. 📊\n\n${content}\n\n${hashtags}`,
      `Peer reviewed and confirmed. 🔬\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "wanted_poster") {
    return [
      `WANTED: For crimes against logic. 🤠\n\n${content}\n\n${hashtags}`,
      `Reward: $0.01. 💰\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "mugshot") {
    return [
      `Guilty as charged. 🚔\n\n${content}\n\n${hashtags}`,
      `Lock me up. ⛓️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "paparazzi") {
    return [
      `Spotted in the wild! 🔭\n\n${content}\n\n${hashtags}`,
      `No privacy in this house. 📸\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "reality") {
    return [
      `At this point I'm just tired. 🍷\n\n${content}\n\n${hashtags}`,
      `I didn't come here to make friends. 💅\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "talk") {
    return [
      `Tonight's guest needs no introduction. 🎙️\n\n${content}\n\n${hashtags}`,
      `Thanks for having me. 🤝\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "weather") {
    return [
      `Forecast: 100% chance of drama. ⛈️\n\n${content}\n\n${hashtags}`,
      `It's getting heated out here. 🌡️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "review") {
    return [
      `1 Star. Would not recommend. ⭐\n\n${content}\n\n${hashtags}`,
      `Customer service was terrible. 📉\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "reddit") {
    return [
      `AITA? Yes. 🚩\n\n${content}\n\n${hashtags}`,
      `Edit: Thanks for the gold kind stranger! 🏅\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "stock") {
    return [
      `Stonks only go down. 📉\n\n${content}\n\n${hashtags}`,
      `Buy the dip? No. 💸\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "scoreboard") {
    return [
      `It's a blowout! 🏈\n\n${content}\n\n${hashtags}`,
      `Scoreboard. 🏟️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "horoscope") {
    return [
      `Mercury is in retrograde. 🔮\n\n${content}\n\n${hashtags}`,
      `The stars say: delete this. ✨\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "podcast") {
    return [
      `New episode out now! 🎙️\n\n${content}\n\n${hashtags}`,
      `Link in bio. 🎧\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "ticket") {
    return [
      `Admit One to the show. 🎟️\n\n${content}\n\n${hashtags}`,
      `Front row seats. 🍿\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "certificate") {
    return [
      `Certified Classic. 🏆\n\n${content}\n\n${hashtags}`,
      `Award for participation. 🎖️\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "topten") {
    return [
      `Number 1 will shock you! 🔟\n\n${content}\n\n${hashtags}`,
      `Trending now. 📈\n\n${content}\n\n${hashtags}`,
    ];
  } else if (template === "auction") {
    return [
      `Going once, going twice... 🔨\n\n${content}\n\n${hashtags}`,
      `SOLD to the lowest bidder! 💸\n\n${content}\n\n${hashtags}`,
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
