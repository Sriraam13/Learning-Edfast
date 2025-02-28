
import { RoadmapModule } from "../components/RoadmapDisplay";

// This is a simplified local roadmap generator.
// In a real application, this would be replaced with calls to an AI model API.
export const generateRoadmap = (
  courseName: string,
  level: string,
  duration: string
): RoadmapModule[] => {
  // For demo purposes, we'll return a sample roadmap based on the course name
  // This would be replaced by actual AI generation

  // For machine learning
  if (courseName.toLowerCase().includes("machine learning")) {
    return machineLearningSampleRoadmap(level, duration);
  }

  // For web development
  if (
    courseName.toLowerCase().includes("web") ||
    courseName.toLowerCase().includes("development")
  ) {
    return webDevSampleRoadmap(level, duration);
  }

  // For data science
  if (
    courseName.toLowerCase().includes("data") ||
    courseName.toLowerCase().includes("analytics")
  ) {
    return dataScienceSampleRoadmap(level, duration);
  }

  // Generic roadmap for other topics
  return generateGenericRoadmap(courseName, level, duration);
};

const machineLearningSampleRoadmap = (
  level: string,
  duration: string
): RoadmapModule[] => {
  if (level === "Beginner") {
    return [
      {
        title: "Foundations of Mathematics and Programming",
        description: "Learn the mathematical and programming fundamentals needed for machine learning",
        topics: [
          "Linear Algebra basics: vectors, matrices, operations",
          "Statistics fundamentals: probability, distributions",
          "Python programming basics",
          "Data manipulation with NumPy and Pandas"
        ],
        resources: [
          "Khan Academy - Linear Algebra",
          "Coursera - Mathematics for Machine Learning",
          "DataCamp - Python for Data Science"
        ]
      },
      {
        title: "Introduction to Machine Learning Concepts",
        description: "Understand the core concepts and types of machine learning",
        topics: [
          "Supervised vs. Unsupervised Learning",
          "Training and testing methodology",
          "Overfitting and Underfitting",
          "Performance metrics"
        ],
        resources: [
          "Coursera - Machine Learning by Andrew Ng",
          "Machine Learning Crash Course by Google"
        ]
      },
      {
        title: "Basic Machine Learning Algorithms",
        description: "Learn implementation of fundamental algorithms",
        topics: [
          "Linear Regression",
          "Logistic Regression",
          "K-Nearest Neighbors",
          "Decision Trees"
        ],
        resources: [
          "Scikit-learn documentation",
          "Hands-On Machine Learning with Scikit-Learn & TensorFlow"
        ]
      },
      {
        title: "Your First End-to-End Project",
        description: "Apply knowledge to a complete machine learning project",
        topics: [
          "Data collection and cleaning",
          "Feature engineering",
          "Model selection and training",
          "Evaluation and deployment basics"
        ],
        resources: [
          "Kaggle Competitions",
          "GitHub repositories with beginner ML projects"
        ]
      }
    ];
  }
  
  // Add intermediate and advanced levels as needed
  return generateGenericRoadmap("Machine Learning", level, duration);
};

const webDevSampleRoadmap = (
  level: string,
  duration: string
): RoadmapModule[] => {
  if (level === "Beginner") {
    return [
      {
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web pages",
        topics: [
          "HTML document structure",
          "CSS selectors and properties",
          "Responsive design principles",
          "CSS Flexbox and Grid"
        ],
        resources: [
          "MDN Web Docs - HTML & CSS",
          "freeCodeCamp - Responsive Web Design"
        ]
      },
      {
        title: "JavaScript Basics",
        description: "Add interactivity to your websites",
        topics: [
          "JavaScript syntax and data types",
          "DOM manipulation",
          "Event handling",
          "Asynchronous JavaScript"
        ],
        resources: [
          "JavaScript.info",
          "Eloquent JavaScript (book)"
        ]
      },
      {
        title: "Frontend Framework Introduction",
        description: "Learn a modern JavaScript framework",
        topics: [
          "React/Vue/Angular basics",
          "Components and props",
          "State management",
          "Routing"
        ]
      },
      {
        title: "Basic Backend Development",
        description: "Introduction to server-side programming",
        topics: [
          "Node.js basics",
          "Express.js framework",
          "RESTful APIs",
          "Database connections (MongoDB)"
        ]
      }
    ];
  }
  
  // Add intermediate and advanced levels as needed
  return generateGenericRoadmap("Web Development", level, duration);
};

const dataScienceSampleRoadmap = (
  level: string,
  duration: string
): RoadmapModule[] => {
  if (level === "Beginner") {
    return [
      {
        title: "Fundamentals of Data Analysis",
        description: "Learn the basics of data manipulation and analysis",
        topics: [
          "Statistical concepts",
          "Python for data analysis",
          "Data cleaning techniques",
          "Exploratory data analysis"
        ]
      },
      {
        title: "Data Visualization",
        description: "Create meaningful visualizations from data",
        topics: [
          "Visualization principles",
          "Matplotlib and Seaborn",
          "Interactive visualizations",
          "Dashboard creation"
        ]
      },
      {
        title: "SQL and Database Fundamentals",
        description: "Learn to work with structured data",
        topics: [
          "SQL syntax and queries",
          "Database design basics",
          "Joins and relationships",
          "Data extraction techniques"
        ]
      },
      {
        title: "Introduction to Machine Learning for Data Science",
        description: "Apply basic machine learning algorithms to data problems",
        topics: [
          "Regression algorithms",
          "Classification techniques",
          "Clustering methods",
          "Model evaluation"
        ]
      }
    ];
  }
  
  // Add intermediate and advanced levels as needed
  return generateGenericRoadmap("Data Science", level, duration);
};

const generateGenericRoadmap = (
  courseName: string,
  level: string,
  duration: string
): RoadmapModule[] => {
  // This function generates a generic roadmap for any subject
  const modules = [];
  const moduleCount = duration.includes("month") ? 4 : duration.includes("week") ? 2 : 6;
  
  // Create a generic structure based on the course name
  for (let i = 1; i <= moduleCount; i++) {
    modules.push({
      title: `${courseName} Module ${i}`,
      description: `Essential concepts and skills for ${courseName} - Part ${i}`,
      topics: [
        `${courseName} foundation concept ${i}.1`,
        `${courseName} key skill ${i}.2`,
        `${courseName} practical technique ${i}.3`,
        `${courseName} application example ${i}.4`
      ],
      resources: [
        `Online course: ${courseName} Fundamentals`,
        `Book: Complete Guide to ${courseName}`,
        `Practice platform for ${courseName}`
      ]
    });
  }
  
  return modules;
};
