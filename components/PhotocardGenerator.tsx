"use client";

import React, { useState, useEffect } from "react";
import { UserProfile, SocialProfile, PhotocardData } from "@/types";
import ControlPanel from "./ControlPanel";
import PreviewSection from "./PreviewSection";

export default function PhotocardGenerator() {
  const [user, setUser] = useState<UserProfile>({
    name: "Gamer One",
    handle: "gamer_one",
    avatarUrl: "",
  });

  const [socials, setSocials] = useState<SocialProfile[]>([
    { platform: "twitch", username: "gamer_one" },
    { platform: "youtube", username: "@gamerone" },
  ]);

  const [content, setContent] = useState<string>(
    "When you finally clutch the 1v4 but your teammates are already back in the lobby."
  );
  const [activeTemplate, setActiveTemplate] = useState<string>("toxic");

  const fullData: PhotocardData = {
    user,
    socials,
    content,
  };

  /* Persistence Logic */
  useEffect(() => {
    // Load from local storage on mount
    const savedUser = localStorage.getItem("photocard_user");
    const savedSocials = localStorage.getItem("photocard_socials");
    const savedTemplate = localStorage.getItem("photocard_template");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedSocials) setSocials(JSON.parse(savedSocials));
    if (savedTemplate) setActiveTemplate(savedTemplate);
    const savedContent = localStorage.getItem("photocard_content");
    if (savedContent) setContent(savedContent);
  }, []);

  useEffect(() => {
    // Save to local storage on change
    localStorage.setItem("photocard_user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("photocard_socials", JSON.stringify(socials));
  }, [socials]);

  useEffect(() => {
    localStorage.setItem("photocard_template", activeTemplate);
  }, [activeTemplate]);

  useEffect(() => {
    localStorage.setItem("photocard_content", content);
  }, [content]);

  const handleSetData = (newData: PhotocardData) => {
    setUser(newData.user);
    setSocials(newData.socials);
    setContent(newData.content);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
      <div className="order-2 lg:order-1">
        <ControlPanel
          user={user}
          setUser={setUser}
          socials={socials}
          setSocials={setSocials}
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate}
        />
      </div>
      <div className="order-1 lg:order-2">
        <PreviewSection
          data={fullData}
          activeTemplate={activeTemplate}
          setData={handleSetData}
        />
      </div>
    </div>
  );
}
