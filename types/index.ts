export interface SocialProfile {
  platform: 'twitter' | 'youtube' | 'twitch' | 'instagram' | 'tiktok' | 'other';
  username: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatarUrl: string;
}

export interface PhotocardData {
  user: UserProfile;
  socials: SocialProfile[];
  content: string;
  timestamp?: string;
}

export interface PhotocardTemplateProps {
  data: PhotocardData;
  className?: string; // For additional styling if needed
  id?: string; // Critical for html-to-image capture
}
