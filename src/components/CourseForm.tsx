
import { useState } from 'react';
import { Book, GraduationCap, Calendar } from 'lucide-react';
import { toast } from 'sonner';

interface CourseFormProps {
  onSubmit: (data: CourseFormData) => void;
  isLoading: boolean;
}

export interface CourseFormData {
  courseName: string;
  level: string;
  duration: string;
}

const CourseForm = ({ onSubmit, isLoading }: CourseFormProps) => {
  const [formData, setFormData] = useState<CourseFormData>({
    courseName: '',
    level: 'Beginner',
    duration: '1 month'
  });
  
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Add a little feedback when selecting duration or level
    if (name === 'duration' || name === 'level') {
      toast.success(`Selected ${name}: ${value}`);
    }
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.courseName.trim()) {
      toast.error("Please enter a course name");
      return;
    }
    
    toast.success("Generating your personalized roadmap...");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto opacity-0 animate-fade-in">
      <div className="space-y-6">
        <div className={`transition-all duration-300 ${focused === 'courseName' ? 'transform scale-[1.02]' : ''}`}>
          <label htmlFor="courseName" className="form-label">
            <Book className={`w-5 h-5 ${focused === 'courseName' ? 'text-purple-300' : ''}`} />
            Course Name
          </label>
          <input
            id="courseName"
            name="courseName"
            type="text"
            placeholder="machine learning"
            required
            className="input-field"
            value={formData.courseName}
            onChange={handleChange}
            onFocus={() => handleFocus('courseName')}
            onBlur={handleBlur}
          />
        </div>

        <div className={`transition-all duration-300 ${focused === 'level' ? 'transform scale-[1.02]' : ''}`}>
          <label htmlFor="level" className="form-label">
            <GraduationCap className={`w-5 h-5 ${focused === 'level' ? 'text-purple-300' : ''}`} />
            Level
          </label>
          <select
            id="level"
            name="level"
            className="input-field"
            value={formData.level}
            onChange={handleChange}
            onFocus={() => handleFocus('level')}
            onBlur={handleBlur}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div className={`transition-all duration-300 ${focused === 'duration' ? 'transform scale-[1.02]' : ''}`}>
          <label htmlFor="duration" className="form-label">
            <Calendar className={`w-5 h-5 ${focused === 'duration' ? 'text-purple-300' : ''}`} />
            Duration
          </label>
          <select
            id="duration"
            name="duration"
            className="input-field"
            value={formData.duration}
            onChange={handleChange}
            onFocus={() => handleFocus('duration')}
            onBlur={handleBlur}
          >
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center hover-scale"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-5 h-5 border-t-2 border-accent animate-spin rounded-full mr-2"></div>
              <span>Generating Roadmap...</span>
            </div>
          ) : (
            <span>Generate Roadmap</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default CourseForm;
