import React from 'react';
import { motion } from 'framer-motion';
import './TopStudents.css'; // Custom CSS for parallax

const TopStudents = () => {
  const students = [
    {
      "name": "Md Jowel Ahmed",
      "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANoPi6XIyIEExjFKW4Gcem3COGfMPDde6DA&s",
      "averageMark": "93%",
      "subjects": ["React", "JavaScript", "Next.js"]
    },
    {
      "name": "Fatima Begum",
      "profilePic": "https://img.freepik.com/free-photo/close-up-beautiful-woman-smiling_23-2148369437.jpg",
      "averageMark": "88%",
      "subjects": ["PHP", "Next.js", "Java"]
    },
    {
      "name": "Rahim Uddin",
      "profilePic": "https://static.vecteezy.com/system/resources/previews/007/469/004/non_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg",
      "averageMark": "90%",
      "subjects": ["JavaScript", "React", "Python"]
    },
    {
      "name": "Aisha Akter",
      "profilePic": "https://img.freepik.com/free-photo/responsible-student_23-2147650755.jpg",
      "averageMark": "92%",
      "subjects": ["Java", "Next.js", "PHP"]
    }
  ]
  

  return (
    <div className="top-students grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {students.map((student, index) => (
        <motion.div
          key={index}
          className="student-card bg-white p-6 shadow-lg rounded-lg overflow-hidden parallax"
          whileHover={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 100, 100, 0],
            borderRadius: ["10%", "10%", "20%", "20%", "10%"],
          }}
        >
          <img
            src={student.profilePic}
            alt={student.name}
            className="w-full h-48 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
          <p className="text-gray-600 mb-4">Average Mark: {student.averageMark}</p>
          <div className="subjects flex flex-wrap gap-2">
            {student.subjects.map((subject, i) => (
              <p
                key={i}
                className="bg-blue-500 text-white px-2 py-1 rounded-md"
              >
                {subject}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopStudents;
