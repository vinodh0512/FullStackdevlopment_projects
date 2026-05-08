import { useState } from 'react'
import './App.css'

// Controlled Student Registration Form Component
const StudentForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'Computer Science',
    gender: 'Male',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: 'Computer Science',
      gender: 'Male',
      terms: false
    });
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <p className="subtitle">Please fill in the details below to enroll</p>
      
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Business Management</option>
              <option>Digital Arts</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>

        <button type="submit" className="submit-btn">Register Student</button>
      </form>
    </div>
  );
};

function App() {
  const [registeredStudents, setRegisteredStudents] = useState([]);

  const handleRegistration = (newStudent) => {
    setRegisteredStudents([...registeredStudents, { ...newStudent, id: Date.now() }]);
    alert('Registration Successful!');
  };

  return (
    <div className="app-wrapper">
      <div className="glass-card">
        <StudentForm onRegister={handleRegistration} />
        
        {registeredStudents.length > 0 && (
          <div className="registered-list">
            <h3>Recently Registered</h3>
            <div className="student-grid">
              {registeredStudents.map(student => (
                <div key={student.id} className="student-card">
                  <h4>{student.fullName}</h4>
                  <p>{student.course}</p>
                  <span className="badge">{student.gender}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
