import React from 'react';
import { CourseProvider } from './CourseContext';
import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";

export default function App() {
  return (
   <CourseProvider>
    <div>
      <Header />
      <SchoolCatalog />
      <ClassSchedule />
    </div>
	</CourseProvider>
  );
}
