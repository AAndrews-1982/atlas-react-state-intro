import React, { createContext, useState, useContext } from 'react';

// Create the context
const CourseContext = createContext();

// Create the provider component
export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses(prevCourses => [...prevCourses, course]);
  };

  const dropCourse = (courseId) => {
    setEnrolledCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  return (
    <CourseContext.Provider value={{ enrolledCourses, enrollCourse, dropCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to use the CourseContext
export const useCourses = () => useContext(CourseContext);
