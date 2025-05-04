const storedFAQCardData = localStorage.getItem('FAQCardData');

export const FAQCardData = storedFAQCardData ? JSON.parse(storedFAQCardData) : [
  [
    {
      question: "What are the school hours at Little Learners Academy?",
      answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
    {
      question: "Is there a uniform policy for students?",
      answer: "Yes, Little Learners Academy has a uniform policy to promote equality and reduce distractions."
    },
    {
      question: "What extracurricular activities are available for students?",
      answer: "We offer a variety of extracurricular activities including arts, music, sports, and language programs to enrich our students' experience."
    },
    {
      question: "What extracurricular activities are available for students?",
      answer: "We offer a variety of extracurricular activities including arts, music, sports, and language programs to enrich our students' experience."
    },


  ],
  [
    {
      question: "How do you handle discipline and behavior management?",
      answer: "We use positive reinforcement and consistent communication with students to encourage good behavior."
    },
    {
      question: "What is the teacher-to-student ratio at Little Learners Academy?",
      answer: "We maintain a low teacher-to-student ratio to ensure personalized attention and effective learning for each child."
    },
    {
      question: "How do you handle food allergies and dietary restrictions?",
      answer: "We carefully accommodate food allergies and dietary needs by collaborating with parents and healthcare providers."
    },

    {
      question: "How do I apply for admission to Little Learners Academy?",
      answer: "You can apply by completing our online application form or visiting our admissions office for assistance."
    },

  ],
];

if (!storedFAQCardData) {
  localStorage.setItem('FAQCardData', JSON.stringify(FAQCardData));
}
