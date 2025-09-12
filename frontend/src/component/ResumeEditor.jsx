// import React, { useState, useRef } from 'react';
// import { Download, Edit3, Save, X } from 'lucide-react';

// const ResumeEditor = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const resumeRef = useRef(null);
  
//   const [resumeData, setResumeData] = useState({
//     name: "ESTELLE DARCY",
//     title: "UX DESIGNER",
//     contact: {
//       address: "123 Anywhere St, Any City",
//       phone: "redbirds.estelle.darcy@email.com",
//       website: "www.reallygreatsite.com"
//     },
//     summary: "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. I have demonstrated proficiency in project management and creative problem solving and seamless collaboration across teams.",
//     areas: [
//       "Journeying Forth",
//       "Leadership",
//       "Interaction Design",
//       "Visual Design",
//       "Accessibility",
//       "Responsive Design"
//     ],
//     achievements: [
//       "Led a multidisciplinary team to secure $2.6M in additional project funding to harness the live market, contributing to revenue increases of 5.2 Million for Monerie in 6 months.",
//       "Recruited the architecture team that delivered a new product experience, elevating client base by 30% in competitive organic lead generation.",
//       "Product development and management led to an increase in revenue by cutting down the cost by $290,000."
//     ],
//     experience: [
//       {
//         title: "Senior Charts App, Monerie Program",
//         period: "Jan 2023 - Present",
//         responsibilities: [
//           "Led development of an innovative optimization system, achieving a 15% increase in overall operational efficiency.",
//           "Spearheaded manufacturing processes, reducing production costs by 10%.",
//           "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime."
//         ]
//       },
//       {
//         title: "System UX Engineer, Kerwood Industries",
//         period: "Feb 2021 - Dec 2022",
//         responsibilities: [
//           "Developed comprehensive user experience strategies, improving customer satisfaction by 25%.",
//           "Coordinated testing and validation, ensuring compliance with industry standards.",
//           "Collaborated with cross-functional teams, contributing to a 15% reduction in system failures."
//         ]
//       }
//     ],
//     education: [
//       {
//         degree: "UX Design Basics and General Application",
//         institution: "University of Engineering UX Cohort",
//         details: "Major in Usability Technology",
//         period: "Aug 2016 - Oct 2019",
//         note: "Best Graduate with Highest Distinction within the current Mechatronics Industry."
//       },
//       {
//         degree: "Bachelor of Design in Process Engineering",
//         institution: "Institute of Technology",
//         period: "May 2014 - May 2016",
//         details: "Relevant coursework in Structural Design and Project Management."
//       }
//     ],
//     additionalInfo: {
//       languages: "English, French, Mandarin",
//       certifications: "Certified Professional Engineer (CPE) License, Project Management Team (PMT)",
//       awards: "Most Innovative Employee of the Year 2023, Overall Best Employee Division Award, Engineering Progress Lead (2023)"
//     }
//   });

//   const handleInputChange = (path, value) => {
//     setResumeData(prev => {
//       const newData = { ...prev };
//       const keys = path.split('.');
//       let current = newData;
      
//       for (let i = 0; i < keys.length - 1; i++) {
//         if (!current[keys[i]]) current[keys[i]] = {};
//         current = current[keys[i]];
//       }
      
//       current[keys[keys.length - 1]] = value;
//       return newData;
//     });
//   };

//   const handleArrayChange = (path, index, value) => {
//     setResumeData(prev => {
//       const newData = { ...prev };
//       const keys = path.split('.');
//       let current = newData;
      
//       for (let i = 0; i < keys.length - 1; i++) {
//         current = current[keys[i]];
//       }
      
//       current[keys[keys.length - 1]][index] = value;
//       return newData;
//     });
//   };

//   const addArrayItem = (path, defaultItem) => {
//     setResumeData(prev => {
//       const newData = { ...prev };
//       const keys = path.split('.');
//       let current = newData;
      
//       for (let i = 0; i < keys.length - 1; i++) {
//         current = current[keys[i]];
//       }
      
//       current[keys[keys.length - 1]].push(defaultItem);
//       return newData;
//     });
//   };

//   const removeArrayItem = (path, index) => {
//     setResumeData(prev => {
//       const newData = { ...prev };
//       const keys = path.split('.');
//       let current = newData;
      
//       for (let i = 0; i < keys.length - 1; i++) {
//         current = current[keys[i]];
//       }
      
//       current[keys[keys.length - 1]].splice(index, 1);
//       return newData;
//     });
//   };

//   const downloadPDF = () => {
//     const element = resumeRef.current;
//     const originalEditing = isEditing;
//     setIsEditing(false);
    
//     setTimeout(() => {
//       window.print();
//       setIsEditing(originalEditing);
//     }, 100);
//   };

//   const EditableText = ({ value, onChange, multiline = false, className = "" }) => {
//     if (!isEditing) {
//       return multiline ? (
//         <div className={className} style={{ whiteSpace: 'pre-wrap' }}>
//           {value}
//         </div>
//       ) : (
//         <span className={className}>{value}</span>
//       );
//     }

//     return multiline ? (
//       <textarea
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`${className} w-full p-1 border border-gray-300 rounded resize-none`}
//         rows={3}
//         style={{ minHeight: '60px' }}
//       />
//     ) : (
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`${className} w-full p-1 border border-gray-300 rounded`}
//       />
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       <style jsx global>{`
//         @media print {
//           body * { visibility: hidden; }
//           .resume-content, .resume-content * { visibility: visible; }
//           .resume-content { position: absolute; left: 0; top: 0; width: 100%; }
//           .no-print { display: none !important; }
//           .page-break { page-break-before: always; }
//         }
//       `}</style>
      
//       {/* Control Buttons */}
//       <div className="no-print mb-4 flex gap-2">
//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           {isEditing ? <Save size={18} /> : <Edit3 size={18} />}
//           {isEditing ? 'Save' : 'Edit'}
//         </button>
//         <button
//           onClick={downloadPDF}
//           className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           <Download size={18} />
//           Download PDF
//         </button>
//       </div>

//       {/* Resume Content */}
//       <div ref={resumeRef} className="resume-content bg-white shadow-lg" style={{ minHeight: '11in' }}>
//         <div className="p-8">
//           {/* Header */}
//           <div className="text-center border-b-2 border-gray-300 pb-4 mb-6">
//             <EditableText
//               value={resumeData.name}
//               onChange={(value) => handleInputChange('name', value)}
//               className="text-3xl font-bold tracking-wider"
//             />
//             <div className="mt-2">
//               <EditableText
//                 value={resumeData.title}
//                 onChange={(value) => handleInputChange('title', value)}
//                 className="text-lg tracking-wider text-gray-700"
//               />
//             </div>
//             <div className="mt-3 text-sm text-gray-600 flex justify-center gap-4">
//               <EditableText
//                 value={resumeData.contact.address}
//                 onChange={(value) => handleInputChange('contact.address', value)}
//               />
//               <span>|</span>
//               <EditableText
//                 value={resumeData.contact.phone}
//                 onChange={(value) => handleInputChange('contact.phone', value)}
//               />
//               <span>|</span>
//               <EditableText
//                 value={resumeData.contact.website}
//                 onChange={(value) => handleInputChange('contact.website', value)}
//               />
//             </div>
//           </div>

//           {/* Summary */}
//           <div className="mb-6">
//             <EditableText
//               value={resumeData.summary}
//               onChange={(value) => handleInputChange('summary', value)}
//               multiline={true}
//               className="text-sm leading-relaxed text-gray-700"
//             />
//           </div>

//           {/* Areas of Expertise */}
//           <div className="mb-6">
//             <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-2 mb-3">
//               AREA OF EXPERTISE
//             </h2>
//             <div className="grid grid-cols-3 gap-4">
//               {resumeData.areas.map((area, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <EditableText
//                     value={area}
//                     onChange={(value) => handleArrayChange('areas', index, value)}
//                     className="text-sm"
//                   />
//                   {isEditing && (
//                     <button
//                       onClick={() => removeArrayItem('areas', index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <X size={14} />
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//             {isEditing && (
//               <button
//                 onClick={() => addArrayItem('areas', 'New Area')}
//                 className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
//               >
//                 + Add Area
//               </button>
//             )}
//           </div>

//           {/* Key Achievements */}
//           <div className="mb-6">
//             <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-2 mb-3">
//               KEY ACHIEVEMENTS
//             </h2>
//             <ul className="space-y-2">
//               {resumeData.achievements.map((achievement, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <span className="text-gray-600 mt-1">•</span>
//                   <div className="flex-1 flex items-center gap-2">
//                     <EditableText
//                       value={achievement}
//                       onChange={(value) => handleArrayChange('achievements', index, value)}
//                       multiline={true}
//                       className="text-sm leading-relaxed flex-1"
//                     />
//                     {isEditing && (
//                       <button
//                         onClick={() => removeArrayItem('achievements', index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X size={14} />
//                       </button>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//             {isEditing && (
//               <button
//                 onClick={() => addArrayItem('achievements', 'New achievement')}
//                 className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
//               >
//                 + Add Achievement
//               </button>
//             )}
//           </div>

//           {/* Professional Experience */}
//           <div className="mb-6">
//             <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-2 mb-3">
//               PROFESSIONAL EXPERIENCE
//             </h2>
//             {resumeData.experience.map((job, jobIndex) => (
//               <div key={jobIndex} className="mb-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <div className="flex-1">
//                     <EditableText
//                       value={job.title}
//                       onChange={(value) => handleInputChange(`experience.${jobIndex}.title`, value)}
//                       className="font-semibold"
//                     />
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <EditableText
//                       value={job.period}
//                       onChange={(value) => handleInputChange(`experience.${jobIndex}.period`, value)}
//                       className="text-sm text-gray-600"
//                     />
//                     {isEditing && (
//                       <button
//                         onClick={() => removeArrayItem('experience', jobIndex)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X size={14} />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <ul className="space-y-1 ml-4">
//                   {job.responsibilities.map((resp, respIndex) => (
//                     <li key={respIndex} className="flex items-start gap-2">
//                       <span className="text-gray-600 mt-1">•</span>
//                       <div className="flex-1 flex items-center gap-2">
//                         <EditableText
//                           value={resp}
//                           onChange={(value) => handleInputChange(`experience.${jobIndex}.responsibilities.${respIndex}`, value)}
//                           multiline={true}
//                           className="text-sm leading-relaxed flex-1"
//                         />
//                         {isEditing && (
//                           <button
//                             onClick={() => {
//                               const newResp = [...resumeData.experience[jobIndex].responsibilities];
//                               newResp.splice(respIndex, 1);
//                               handleInputChange(`experience.${jobIndex}.responsibilities`, newResp);
//                             }}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             <X size={14} />
//                           </button>
//                         )}
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 {isEditing && (
//                   <button
//                     onClick={() => {
//                       const newResp = [...resumeData.experience[jobIndex].responsibilities, 'New responsibility'];
//                       handleInputChange(`experience.${jobIndex}.responsibilities`, newResp);
//                     }}
//                     className="mt-2 ml-4 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
//                   >
//                     + Add Responsibility
//                   </button>
//                 )}
//               </div>
//             ))}
//             {isEditing && (
//               <button
//                 onClick={() => addArrayItem('experience', {
//                   title: 'New Position',
//                   period: 'Date Range',
//                   responsibilities: ['New responsibility']
//                 })}
//                 className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
//               >
//                 + Add Experience
//               </button>
//             )}
//           </div>

//           {/* Education */}
//           <div className="mb-6">
//             <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-2 mb-3">
//               EDUCATION
//             </h2>
//             {resumeData.education.map((edu, eduIndex) => (
//               <div key={eduIndex} className="mb-3">
//                 <div className="flex justify-between items-start mb-1">
//                   <div className="flex-1">
//                     <EditableText
//                       value={edu.degree}
//                       onChange={(value) => handleInputChange(`education.${eduIndex}.degree`, value)}
//                       className="font-semibold"
//                     />
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <EditableText
//                       value={edu.period}
//                       onChange={(value) => handleInputChange(`education.${eduIndex}.period`, value)}
//                       className="text-sm text-gray-600"
//                     />
//                     {isEditing && (
//                       <button
//                         onClick={() => removeArrayItem('education', eduIndex)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X size={14} />
//                       </button>
//                     )}
//                   </div>
//                 </div>
//                 <EditableText
//                   value={edu.institution}
//                   onChange={(value) => handleInputChange(`education.${eduIndex}.institution`, value)}
//                   className="text-sm text-gray-600 block mb-1"
//                 />
//                 {edu.details && (
//                   <EditableText
//                     value={edu.details}
//                     onChange={(value) => handleInputChange(`education.${eduIndex}.details`, value)}
//                     className="text-sm text-gray-600 block mb-1"
//                   />
//                 )}
//                 {edu.note && (
//                   <EditableText
//                     value={edu.note}
//                     onChange={(value) => handleInputChange(`education.${eduIndex}.note`, value)}
//                     multiline={true}
//                     className="text-sm text-gray-600"
//                   />
//                 )}
//               </div>
//             ))}
//             {isEditing && (
//               <button
//                 onClick={() => addArrayItem('education', {
//                   degree: 'New Degree',
//                   institution: 'Institution Name',
//                   period: 'Date Range',
//                   details: '',
//                   note: ''
//                 })}
//                 className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
//               >
//                 + Add Education
//               </button>
//             )}
//           </div>

//           {/* Additional Information */}
//           <div>
//             <h2 className="text-lg font-bold tracking-wider border-b border-gray-300 pb-2 mb-3">
//               ADDITIONAL INFORMATION
//             </h2>
//             <div className="space-y-2 text-sm">
//               <div>
//                 <strong>Languages:</strong>{' '}
//                 <EditableText
//                   value={resumeData.additionalInfo.languages}
//                   onChange={(value) => handleInputChange('additionalInfo.languages', value)}
//                   className="inline"
//                 />
//               </div>
//               <div>
//                 <strong>Certifications:</strong>{' '}
//                 <EditableText
//                   value={resumeData.additionalInfo.certifications}
//                   onChange={(value) => handleInputChange('additionalInfo.certifications', value)}
//                   className="inline"
//                 />
//               </div>
//               <div>
//                 <strong>Awards/Activities:</strong>{' '}
//                 <EditableText
//                   value={resumeData.additionalInfo.awards}
//                   onChange={(value) => handleInputChange('additionalInfo.awards', value)}
//                   multiline={true}
//                   className="inline"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeEditor;

import React, { useState } from 'react';
import { Download, Edit3, Save, X } from 'lucide-react';

const ResumeEditor = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [resumeData, setResumeData] = useState({
    name: 'ESTELLE DARCY',
    title: 'UX DESIGNER',
    contact: {
      address: '123 Anywhere St, Any City',
      website: 'hellomellyinteractive.com',
      email: 'hello@reallygreatsite.com'
    },
    summary: 'UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. I have demonstrated proficiency in project management and comic problem solving, and seamless collaboration across teams.',
    areas: [
      'Information Architecture',
      'Interaction Design',
      'Visual Design',
      'Accessibility',
      'Responsive Design'
    ],
    achievements: [
      'Led a team of 15 people, completing projects on time and ensuring user satisfaction by 95%',
      'Contributed to a revenue increase of 8.2 Million for Moresite in 6 months.',
      'Increased monthly successful implementation of a new product strategy by 94% at Moresite',
      'Implemented exceptional branding solutions that enhanced team productivity and increased overall deal size by 50% and revenue gap by $500,000'
    ],
    experience: [
      {
        title: 'Senior Charts App, Moresite Program',
        duration: 'Jan 2023 - Present',
        responsibilities: [
          'Led development of an innovative authentication system, achieving a 15% increase in overall user base',
          'Streamlined manufacturing processes, reducing production costs by 30%',
          'Implemented comprehensive maintenance strategies, resulting in a 25% decrease in equipment downtime'
        ]
      },
      {
        title: 'System UX Engineer, Reinvendit Industries',
        duration: 'Feb 2021 - Dec 2022',
        responsibilities: [
          'Supervised manufacturing operations, enhancing overall workflow optimization and cost-effectiveness',
          'Coordinated testing and validation, ensuring compliance with industry standards',
          'Managed technical operations, contributing to a 15% reduction in system downtime'
        ]
      }
    ],
    education: [
      {
        degree: 'UX Design of Basics and General Application',
        school: 'University of Engineering UX Center',
        duration: 'Aug 2016 - Oct 2019',
        note: 'Major in Computer Technology',
        details: 'Recognized as the Top Student within the current Mechatronics Industry'
      },
      {
        degree: 'Bachelor of Design in Process Engineering',
        school: 'Really Great University',
        duration: 'May 2014 - May 2016',
        note: '',
        details: 'Relevant coursework in Structure Design and Project Management'
      }
    ],
    additional: {
      languages: 'English, French, Mandarin',
      certifications: 'Certified Professional Engineer (CPE) License, Project Management Team (PMI)',
      awards: 'Most Innovative Employee of the Year 2022, Overall Best Employee Division - 2021, Outstanding Projects Lead (2023)'
    }
  });

  const handleInputChange = (path, value) => {
    setResumeData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {};
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayChange = (path, index, value) => {
    setResumeData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      if (!current[keys[keys.length - 1]]) {
        current[keys[keys.length - 1]] = [];
      }
      
      current[keys[keys.length - 1]][index] = value;
      return newData;
    });
  };

  const addArrayItem = (path, defaultValue) => {
    setResumeData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      if (!current[keys[keys.length - 1]]) {
        current[keys[keys.length - 1]] = [];
      }
      
      current[keys[keys.length - 1]].push(defaultValue);
      return newData;
    });
  };

  const removeArrayItem = (path, index) => {
    setResumeData(prev => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]].splice(index, 1);
      return newData;
    });
  };

  const downloadPDF = () => {
    const element = document.getElementById('resume-content');
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${resumeData.name} Resume</title>
        <style>
          @page {
            size: A4;
            margin: 15mm;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Arial', sans-serif;
            font-size: 10pt;
            line-height: 1.2;
            color: #000;
            background: white;
          }
          .resume-container {
            width: 100%;
            max-width: none;
            background: white;
            padding: 0;
            margin: 0;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
          }
          .name {
            font-size: 22pt;
            font-weight: bold;
            letter-spacing: 2px;
            margin-bottom: 5px;
            color: #000;
          }
          .title {
            font-size: 12pt;
            color: #666;
            letter-spacing: 1px;
            margin-bottom: 8px;
          }
          .contact {
            font-size: 9pt;
            color: #444;
          }
          .section {
            margin-bottom: 18px;
          }
          .section-title {
            font-size: 11pt;
            font-weight: bold;
            text-transform: uppercase;
            border-bottom: 1px solid #333;
            padding-bottom: 3px;
            margin-bottom: 10px;
            letter-spacing: 1px;
          }
          .summary {
            font-size: 9pt;
            line-height: 1.4;
            text-align: justify;
          }
          .areas-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-bottom: 5px;
          }
          .area-item {
            font-size: 9pt;
            padding: 2px 0;
          }
          .achievement, .responsibility {
            font-size: 9pt;
            margin-bottom: 6px;
            line-height: 1.3;
            display: flex;
            align-items: flex-start;
          }
          .bullet {
            margin-right: 8px;
            font-weight: bold;
            margin-top: 1px;
          }
          .experience-item, .education-item {
            margin-bottom: 15px;
            page-break-inside: avoid;
          }
          .job-title, .degree {
            font-weight: bold;
            font-size: 10pt;
            margin-bottom: 2px;
          }
          .duration {
            font-size: 9pt;
            color: #666;
            margin-bottom: 5px;
          }
          .school {
            font-size: 9pt;
            color: #666;
          }
          .note {
            font-size: 9pt;
            font-style: italic;
            color: #555;
            margin-bottom: 2px;
          }
          .details {
            font-size: 9pt;
            margin-top: 3px;
          }
          .additional-section {
            font-size: 9pt;
            line-height: 1.3;
          }
          .additional-item {
            margin-bottom: 8px;
          }
          .additional-label {
            font-weight: bold;
            display: inline;
          }
          .additional-content {
            display: inline;
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <!-- Header -->
          <div class="header">
            <div class="name">${resumeData.name}</div>
            <div class="title">${resumeData.title}</div>
            <div class="contact">
              ${resumeData.contact.address} | ${resumeData.contact.website} | ${resumeData.contact.email}
            </div>
          </div>

          <!-- Summary -->
          <div class="section">
            <div class="section-title">Professional Summary</div>
            <div class="summary">${resumeData.summary}</div>
          </div>

          <!-- Areas of Expertise -->
          <div class="section">
            <div class="section-title">Area of Expertise</div>
            <div class="areas-grid">
              ${resumeData.areas.map(area => `<div class="area-item">${area}</div>`).join('')}
            </div>
          </div>

          <!-- Key Achievements -->
          <div class="section">
            <div class="section-title">Key Achievements</div>
            ${resumeData.achievements.map(achievement => 
              `<div class="achievement">
                <span class="bullet">•</span>
                <span>${achievement}</span>
              </div>`
            ).join('')}
          </div>

          <!-- Professional Experience -->
          <div class="section">
            <div class="section-title">Professional Experience</div>
            ${resumeData.experience.map(exp => 
              `<div class="experience-item">
                <div class="job-title">${exp.title}</div>
                <div class="duration">${exp.duration}</div>
                ${exp.responsibilities.map(resp => 
                  `<div class="responsibility">
                    <span class="bullet">•</span>
                    <span>${resp}</span>
                  </div>`
                ).join('')}
              </div>`
            ).join('')}
          </div>

          <!-- Education -->
          <div class="section">
            <div class="section-title">Education</div>
            ${resumeData.education.map(edu => 
              `<div class="education-item">
                <div class="degree">${edu.degree}</div>
                <div class="school">${edu.school}</div>
                <div class="duration">${edu.duration}</div>
                ${edu.note ? `<div class="note">${edu.note}</div>` : ''}
                ${edu.details ? `<div class="details">${edu.details}</div>` : ''}
              </div>`
            ).join('')}
          </div>

          <!-- Additional Information -->
          <div class="section">
            <div class="section-title">Additional Information</div>
            <div class="additional-section">
              <div class="additional-item">
                <span class="additional-label">Languages:</span>
                <span class="additional-content"> ${resumeData.additional.languages}</span>
              </div>
              <div class="additional-item">
                <span class="additional-label">Certifications:</span>
                <span class="additional-content"> ${resumeData.additional.certifications}</span>
              </div>
              <div class="additional-item">
                <span class="additional-label">Awards/Activities:</span>
                <span class="additional-content"> ${resumeData.additional.awards}</span>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const EditableText = ({ value, path, className = '', placeholder = '', multiline = false }) => {
    if (!isEditing) {
      return <span className={className}>{value || placeholder}</span>;
    }

    if (multiline) {
      return (
        <textarea
          value={value || ''}
          onChange={(e) => handleInputChange(path, e.target.value)}
          className={`${className} border border-gray-300 rounded px-2 py-1 w-full resize-none`}
          placeholder={placeholder}
          rows={3}
        />
      );
    }

    return (
      <input
        type="text"
        value={value || ''}
        onChange={(e) => handleInputChange(path, e.target.value)}
        className={`${className} border border-gray-300 rounded px-2 py-1 w-full`}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Resume Editor</h1>
        <div className="flex gap-2">
          {isEditing ? (
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save size={16} />
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit3 size={16} />
              Edit
            </button>
          )}
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>
      </div>

      <div id="resume-content" className="bg-white shadow-lg mx-auto p-8" style={{ maxWidth: '210mm' }}>
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
          <div className="text-3xl font-bold tracking-wider mb-1">
            <EditableText
              value={resumeData.name}
              path="name"
              placeholder="Full Name"
            />
          </div>
          <div className="text-lg text-gray-600 tracking-wide mb-3">
            <EditableText
              value={resumeData.title}
              path="title"
              placeholder="Job Title"
            />
          </div>
          <div className="text-sm text-gray-700">
            <EditableText
              value={resumeData.contact.address}
              path="contact.address"
              placeholder="Address"
            />
            {' | '}
            <EditableText
              value={resumeData.contact.website}
              path="contact.website"
              placeholder="Website"
            />
            {' | '}
            <EditableText
              value={resumeData.contact.email}
              path="contact.email"
              placeholder="Email"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-800 pb-1 mb-4 tracking-wide">
            Professional Summary
          </h2>
          <div className="text-sm leading-relaxed text-justify">
            <EditableText
              value={resumeData.summary}
              path="summary"
              placeholder="Professional summary"
              multiline={true}
            />
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-800 pb-1 mb-4 tracking-wide">
            Area of Expertise
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {resumeData.areas.map((area, index) => (
              <div key={index} className="text-xs py-1 flex items-center">
                {isEditing && (
                  <button
                    onClick={() => removeArrayItem('areas', index)}
                    className="text-red-500 hover:text-red-700 mr-2"
                  >
                    <X size={12} />
                  </button>
                )}
                <EditableText
                  value={area}
                  path="areas"
                  className="flex-1"
                  placeholder="Expertise area"
                />
              </div>
            ))}
            {isEditing && (
              <button
                onClick={() => addArrayItem('areas', '')}
                className="text-blue-600 hover:text-blue-800 text-xs p-1 border border-dashed border-blue-300 rounded col-span-2"
              >
                + Add Area
              </button>
            )}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-800 pb-1 mb-4 tracking-wide">
            Key Achievements
          </h2>
          {resumeData.achievements.map((achievement, index) => (
            <div key={index} className="text-xs mb-2 leading-relaxed flex items-start">
              <span className="mr-2 font-bold">•</span>
              <div className="flex-1">
                {isEditing && (
                  <button
                    onClick={() => removeArrayItem('achievements', index)}
                    className="text-red-500 hover:text-red-700 float-right ml-2"
                  >
                    <X size={12} />
                  </button>
                )}
                <EditableText
                  value={achievement}
                  path="achievements"
                  placeholder="Achievement description"
                  multiline={true}
                />
              </div>
            </div>
          ))}
          {isEditing && (
            <button
              onClick={() => addArrayItem('achievements', '')}
              className="text-blue-600 hover:text-blue-800 text-xs p-1 border border-dashed border-blue-300 rounded"
            >
              + Add Achievement
            </button>
          )}
        </div>

        {/* Professional Experience */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-800 pb-1 mb-4 tracking-wide">
            Professional Experience
          </h2>
          {resumeData.experience.map((exp, expIndex) => (
            <div key={expIndex} className="mb-5">
              {isEditing && (
                <button
                  onClick={() => removeArrayItem('experience', expIndex)}
                  className="text-red-500 hover:text-red-700 float-right"
                >
                  <X size={16} />
                </button>
              )}
              <div className="font-bold text-sm mb-1">
                <EditableText
                  value={exp.title}
                  path={`experience.${expIndex}.title`}
                  placeholder="Job Title"
                />
              </div>
              <div className="text-xs text-gray-600 mb-2">
                <EditableText
                  value={exp.duration}
                  path={`experience.${expIndex}.duration`}
                  placeholder="Duration"
                />
              </div>
              {exp.responsibilities.map((resp, respIndex) => (
                <div key={respIndex} className="text-xs mb-2 leading-relaxed flex items-start">
                  <span className="mr-2 font-bold">•</span>
                  <div className="flex-1">
                    {isEditing && (
                      <button
                        onClick={() => {
                          const newExp = [...resumeData.experience];
                          newExp[expIndex].responsibilities.splice(respIndex, 1);
                          setResumeData(prev => ({ ...prev, experience: newExp }));
                        }}
                        className="text-red-500 hover:text-red-700 float-right ml-2"
                      >
                        <X size={12} />
                      </button>
                    )}
                    <EditableText
                      value={resp}
                      path={`experience.${expIndex}.responsibilities.${respIndex}`}
                      placeholder="Responsibility description"
                      multiline={true}
                    />
                  </div>
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() => {
                    const newExp = [...resumeData.experience];
                    newExp[expIndex].responsibilities.push('');
                    setResumeData(prev => ({ ...prev, experience: newExp }));
                  }}
                  className="text-blue-600 hover:text-blue-800 text-xs p-1 border border-dashed border-blue-300 rounded ml-4"
                >
                  + Add Responsibility
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              onClick={() => addArrayItem('experience', {
                title: '',
                duration: '',
                responsibilities: ['']
              })}
              className="text-blue-600 hover:text-blue-800 text-xs p-2 border border-dashed border-blue-300 rounded"
            >
              + Add Experience
            </button>
          )}
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-800 pb-1 mb-4 tracking-wide">
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              {isEditing && (
                <button
                  onClick={() => removeArrayItem('education', index)}
                  className="text-red-500 hover:text-red-700 float-right"
                >
                  <X size={16} />
                </button>
              )}
              <div className="font-bold text-sm">
                <EditableText
                  value={edu.degree}
                  path={`education.${index}.degree`}
                  placeholder="Degree"
                />
              </div>
              <div className="text-xs text-gray-600">
                <EditableText
                  value={edu.school}
                  path={`education.${index}.school`}
                  placeholder="School"
                />
              </div>
              <div className="text-xs text-gray-600 mb-1">
                <EditableText
                  value={edu.duration}
                  path={`education.${index}.duration`}
                  placeholder="Duration"
                />
              </div>
              {(edu.note || isEditing) && (
                <div className="text-xs italic text-gray-500">
                  <EditableText
                    value={edu.note}
                    path={`education.${index}.note`}
                    placeholder="Additional note"
                  />
                </div>
              )}
              <div className="text-xs mt-1">
                <EditableText
                  value={edu.details}
                  path={`education.${index}.details`}
                  placeholder="Details"
                  multiline={true}
                />
              </div>
            </div>
          ))}
          {isEditing && (
            <button
              onClick={() => addArrayItem('education', {
                degree: '',
                school: '',
                duration: '',
                note: '',
                details: ''
              })}
              className="text-blue-600 hover:text-blue-800 text-xs p-2 border border-dashed border-blue-300 rounded"
            >
              + Add Education
            </button>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <h2 className="text-sm font-bold uppercase border-b border-gray-800 pb-1 mb-4 tracking-wide">
            Additional Information
          </h2>
          <div className="text-xs leading-relaxed space-y-2">
            <div>
              <strong>Languages:</strong>{' '}
              <EditableText
                value={resumeData.additional.languages}
                path="additional.languages"
                className="inline"
                placeholder="Languages"
              />
            </div>
            <div>
              <strong>Certifications:</strong>{' '}
              <EditableText
                value={resumeData.additional.certifications}
                path="additional.certifications"
                placeholder="Certifications"
                multiline={true}
              />
            </div>
            <div>
              <strong>Awards/Activities:</strong>{' '}
              <EditableText
                value={resumeData.additional.awards}
                path="additional.awards"
                placeholder="Awards and activities"
                multiline={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;