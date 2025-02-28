
import { useState } from 'react';
import CourseForm, { CourseFormData } from '../components/CourseForm';
import RoadmapDisplay, { RoadmapModule } from '../components/RoadmapDisplay';
import { generateRoadmapWithAI } from '../utils/ai';
import { Toaster } from 'sonner';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapModule[] | null>(null);
  const [formData, setFormData] = useState<CourseFormData | null>(null);

  const handleSubmit = async (data: CourseFormData) => {
    setIsLoading(true);
    setRoadmap(null);
    
    try {
      const generatedRoadmap = await generateRoadmapWithAI(
        data.courseName,
        data.level,
        data.duration
      );
      
      setRoadmap(generatedRoadmap);
      setFormData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6">
      <Toaster position="top-center" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Course Roadmap Generator
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Interactive Website
          </p>
        </div>

        <div className="glassmorphism rounded-3xl p-6 md:p-10 max-w-4xl mx-auto opacity-0 animate-fade-in animate-delay-1">
          {!roadmap ? (
            <CourseForm onSubmit={handleSubmit} isLoading={isLoading} />
          ) : (
            <div>
              <RoadmapDisplay 
                modules={roadmap} 
                courseName={formData?.courseName || ''} 
                level={formData?.level || ''} 
                duration={formData?.duration || ''} 
              />
              
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setRoadmap(null)}
                  className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white/20 transition-all"
                >
                  Create New Roadmap
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-10 text-center text-white/70 text-sm opacity-0 animate-fade-in animate-delay-4">
          <p>Our roadmaps are generated using advanced AI algorithms tailored to your learning needs</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
