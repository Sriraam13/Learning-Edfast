
import { Check, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface RoadmapModule {
  title: string;
  description: string;
  topics: string[];
  resources?: string[];
}

interface RoadmapDisplayProps {
  modules: RoadmapModule[];
  courseName: string;
  level: string;
  duration: string;
}

const RoadmapDisplay = ({ modules, courseName, level, duration }: RoadmapDisplayProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 opacity-0 animate-scale-in">
      <div className="glassmorphism rounded-2xl p-8">
        <div className="text-center mb-8">
          <span className="tag inline-block mb-2">Your personalized roadmap</span>
          <h2 className="text-3xl font-bold text-white">{courseName}</h2>
          <div className="flex items-center justify-center mt-2 gap-3 text-white/80">
            <span>{level}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-5 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {index + 1}. {module.title}
              </h3>
              <p className="text-white/80 text-sm mb-3">{module.description}</p>
              
              <div className="space-y-2">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-start">
                    <div className="bg-white/20 p-1 rounded-full mr-2 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 text-sm">{topic}</span>
                  </div>
                ))}
              </div>

              {module.resources && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <h4 className="text-white/90 text-sm font-medium mb-2">Resources:</h4>
                  <ul className="space-y-1">
                    {module.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="text-white/70 text-xs flex items-center">
                        <ArrowRight className="w-3 h-3 mr-1" />
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => window.print()} 
            className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-all"
          >
            Save Roadmap
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDisplay;
