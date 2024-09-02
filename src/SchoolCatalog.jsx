import React, { useState, useEffect } from 'react';

export default function SchoolCatalog() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/courses.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

// Function to Filter courses based on search term
  const filteredCourses = courses.filter(course =>
    course.courseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      {/* Update the input to track searchTerm */}
      <input 
	type="text" 
	placeholder="Search"
	value={searchterm}
	onChange={e => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
	
	{/* Render the filtered courses */}
	{filteredCourses.map((course, index) => (
	   <tr key={index}>
            <tr>
	    <td>1</td>
            <td>PP1000</td>
            <td>Beginning Procedural Programming</td>
            <td>2</td>
            <td>30</td>
            <td>
              <button>Enroll</button>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>PP1100</td>
            <td>Basic Procedural Programming</td>
            <td>4</td>
            <td>50</td>
            <td>
              <button>Enroll</button>
            </td>
          </tr>

	</thead>
	<tbody>
          <tr key={index}>
            <td>1</td>
            <td>OS1000</td>
            <td>Fundamentals of Open Source Operating Systems</td>
            <td>2.5</td>
            <td>37.5</td>
            <td>
              <button>Enroll</button>
            </td>
          </tr>
	))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
