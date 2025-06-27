// import { useState } from "react";
// import StaffForm from './Components/StaffForm';
// import StaffDetails from './Components/StaffDetails';

// export default function App() {
//   const [submittedData, setSubmittedData] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {!submittedData ? (
//         <StaffForm onSubmit={(data) => setSubmittedData(data)} />
//       ) : (
//         <StaffDetails data={submittedData} />
//       )}
//     </div>
//   );
// }
// App.js
import React from 'react';
import StaffProfileTabs from './Components/StaffProfileTabs';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <StaffProfileTabs />
    </div>
  );
}
