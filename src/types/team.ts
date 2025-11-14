export interface TeamMember {
  id: string;
  name: string;
  position: string; // e.g., "Chief Executive Officer", "Director"
  image: string;
  description: string;
  highlights: string[]; // Bullet points
  email?: string;
  linkedin?: string;
}

