import React, { useState } from 'react';
import { School, Users, BookOpen, Layers, Settings } from 'lucide-react';
import { CardContainer } from './CardContainer';
import { Button } from '../../Components/ui/Button';
import { Footer } from './Footer';

export const ManualEntryScreen = () => {
  const [activeTab, setActiveTab] = useState('classroom');

  const tabs = [
    { id: 'classroom', label: 'Classroom', icon: School },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'batches', label: 'Batches', icon: Layers },
    { id: 'constraints', label: 'Constraints', icon: Settings },
  ];

  return (
    <CardContainer title="No file? No problem — you can manually input all required data at your own pace">

      
      <div className="flex justify-center flex-wrap gap-6 mb-14 ">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <Button
              key={tab.id}
              variant="secondaryIcon"
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2
                px-5 py-2
                rounded-lg w-80
                ${isActive ? 'border-[#265768] text-[#265768]' : ''}
              `}
            >
              <Icon className="w-6 h-6 shrink-0 text-[#265768]" />
              {tab.label}
            </Button>
          );
        })}
      </div>

     
      <div className="flex justify-center mr-37">
        <Button>
          Submit Data
        </Button>
      </div>

      <Footer />
    </CardContainer>
  );
};













// import React, { useState } from 'react';
// import { School, Users, BookOpen, Layers, Settings } from 'lucide-react';
// import { CardContainer } from './CardContainer';
// import { Button } from '../../Components/ui/Button';
// import { Footer } from './Footer';



// export const ManualEntryScreen = () => {
//   const [activeTab, setActiveTab] = useState('classroom');

//   const tabs = [
//     { id: 'classroom', label: 'Classroom', icon: School },
//     { id: 'faculty', label: 'Faculty', icon: Users },
//     { id: 'subjects', label: 'Subjects', icon: BookOpen },
//     { id: 'batches', label: 'Batches', icon: Layers }
//   ];

//   return (
//     <CardContainer title="No file? No problem — you can manually input all required data at your own pace">
      
//       {/* ===== Tabs as Secondary Buttons ===== */}
//       <div className="grid grid-cols-4 gap-2 mb-10">
//         {tabs.map((tab) => {
//           const Icon = tab.icon;
//           const isActive = activeTab === tab.id;

//           return (
//             <Button
//               key={tab.id}
//               variant="secondary"
//               onClick={() => setActiveTab(tab.id)}
//               className={`
//                 flex
//                 items-center
//                 gap-1.5
//                 px-2
//                 ${isActive ? 'border-[#265768] text-[#265768]' : ''}
//               `}
//             >
//               <Icon className="w-3 h-3" />
//               {tab.label}
//             </Button>
//           );
//         })}
//       </div>

//       {/* ===== Constraints Button ===== */}
//       <div className="flex justify-center mb-10">
//         <Button
//           variant="secondary"
//           className="flex items-center gap-1 px-3"
//         >
//           <Settings className="w-3 h-3" />
//           Constraints
//         </Button>
//       </div>

//       {/* ===== Submit Button (Primary untouched) ===== */}
//       <Button>
//         Submit Data
//       </Button>

//       <Footer />
//     </CardContainer>
//   );
// };






// import React, { useState } from 'react';
// import { School, Users, BookOpen, Layers, Settings } from 'lucide-react';
// import { CardContainer } from './CardContainer';
// import { TabButton } from './TabButton';
// import { Button } from '../../Components/ui/Button';
// import { Footer } from './Footer';


// export const ManualEntryScreen = () => {
//   const [activeTab, setActiveTab] = useState('classroom');

//   const tabs = [
//     { id: 'classroom', label: 'Classroom', icon: School },
//     { id: 'faculty', label: 'Faculty', icon: Users },
//     { id: 'subjects', label: 'Subjects', icon: BookOpen },
//     { id: 'batches', label: 'Batches', icon: Layers }
//   ];

//   return (
//     <CardContainer title="No file? No problem — you can manually input all required data at your own pace">
//       <div className="grid grid-cols-4 gap-5 mb-10">
//         {tabs.map((tab) => (
//           <TabButton
//             key={tab.id}
//             id={tab.id}
//             label={tab.label}
//             icon={tab.icon}
//             isActive={activeTab === tab.id}
//             onClick={setActiveTab}
//           />
//         ))}
//       </div>

//       <div className="flex justify-center mb-10">
//         <button className="p-2 rounded-xl border-2 border-gray-300 bg-white hover:border-teal-300 hover:shadow-sm transition-all duration-300">
//           <Settings className="w-7 h-7 mx-auto mb-2.5 text-gray-400" />
//           <span className="text-sm text-gray-600 font-medium">Constraints</span>
//         </button>
//       </div>

//       <Button>
//         Submit Data
//       </Button>

//       <Footer />
//     </CardContainer>
//   );
// };




// export const ManualEntryScreen = () => {
//   const [activeTab, setActiveTab] = useState('classroom');

//   const tabs = [
//     { id: 'classroom', label: 'Classroom', icon: School },
//     { id: 'faculty', label: 'Faculty', icon: Users },
//     { id: 'subjects', label: 'Subjects', icon: BookOpen },
//     { id: 'batches', label: 'Batches', icon: Layers }
//   ];

//   return (
//     <CardContainer title="No file? No problem — you can manually input all required data at your own pace">
//       <div className="grid grid-cols-4 gap-4 mb-8">
//         {tabs.map((tab) => (
//           <TabButton
//             key={tab.id}
//             id={tab.id}
//             label={tab.label}
//             icon={tab.icon}
//             isActive={activeTab === tab.id}
//             onClick={setActiveTab}
//           />
//         ))}
//       </div>

//       <div className="flex justify-center mb-8">
//         <button className="p-4 rounded-lg border-2 border-gray-300 bg-white hover:border-cyan-300 transition-all">
//           <Settings className="w-6 h-6 mx-auto mb-2 text-gray-400" />
//           <span className="text-sm text-gray-600">Constraints</span>
//         </button>
//       </div>

//       <Button>
//         Submit Data
//       </Button>

//       <Footer />
//     </CardContainer>
//   );
// };