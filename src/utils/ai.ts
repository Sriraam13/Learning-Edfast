
import { toast } from "sonner";
import { RoadmapModule } from "../components/RoadmapDisplay";
import { generateRoadmap } from "../lib/roadmap";

// We'll simulate AI generation for now, but this can be replaced with actual API calls
export const generateRoadmapWithAI = async (
  courseName: string,
  level: string,
  duration: string
): Promise<RoadmapModule[]> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    // For now, we'll use our local generator, but this is where you'd call an external API
    const roadmap = generateRoadmap(courseName, level, duration);
    return roadmap;
  } catch (error) {
    console.error("Error generating roadmap:", error);
    toast.error("Failed to generate roadmap. Please try again.");
    throw error;
  }
};
