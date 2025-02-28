
import { useState } from 'react';
import { Book, GraduationCap, Calendar } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto opacity-0 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label htmlFor="courseName" className="form-label">
            <Book className="w-5 h-5" />
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
          />
        </div>

        <div>
          <label htmlFor="level" className="form-label">
            <GraduationCap className="w-5 h-5" />
            Level
          </label>
          <select
            id="level"
            name="level"
            className="input-field"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration" className="form-label">
            <Calendar className="w-5 h-5" />
            Duration
          </label>
          <select
            id="duration"
            name="duration"
            className="input-field"
            value={formData.duration}
            onChange={handleChange}
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
          className="btn-primary w-full flex items-center justify-center"
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
