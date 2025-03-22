import React, { useState } from 'react';
import CollegeList from './CollegeList';
import CollegeForm from './CollegeForm';
const App = () => {
const [colleges, setColleges] = useState([]);
const addCollege = (college) => {
setColleges([...colleges, college]);
};
return (
<div>
<h1>College Management</h1>
<CollegeForm addCollege={addCollege} />
<CollegeList colleges={colleges} />
</div>
);
};
export default App   ;