import React, { useState } from "react";
import { Edit2, Trash2 } from "lucide-react";

// Component for Upload Button
const Component = ({ property1, className, headingClassName }) => {
  return (
    <div
      className={`bg-[linear-gradient(0deg,rgba(38,87,104,1)_0%,rgba(75,172,206,1)_100%)] w-52 left-2.5 h-10 overflow-hidden rounded-md relative ${property1 === "variant-12" ? "top-[214px]" : "top-[146px]"} ${property1 === "variant-12" ? "shadow-[0px_4px_4px_#00000040]" : ""} ${className}`}
    >
      <p
        className={`[font-family:'Mulish',Helvetica] left-2 tracking-[0] text-base top-[11px] text-white font-medium text-center whitespace-nowrap leading-[19.2px] absolute ${headingClassName}`}
      >
        Upload File ( CSV / XLSX )
      </p>
    </div>
  );
};

// FacultyData Component
const FacultyData = ({ searchQuery = "" }) => {
  const facultyList = [
    {
      name: "Dr Rakesh Kumar Yadav",
      email: "rakeshkumar675@gmail.com",
      maxLoad: "5 Hrs",
      leaves: 5,
    },
    {
      name: "Dr Shweta Vikram",
      email: "shweta69@gmail.com",
      maxLoad: "3 Hrs",
      leaves: 3,
    },
    {
      name: "Mrs Pooja Shukla",
      email: "poojasunshore@gmail.com",
      maxLoad: "2 Hrs",
      leaves: 2,
    },
    {
      name: "Mr Sanjeev Kumar",
      email: "sanjeev65@gmail.com",
      maxLoad: "5 Hrs",
      leaves: 5,
    },
    {
      name: "Dr kalayan Acharya",
      email: "kalayan977@gmail.com",
      maxLoad: "2 Hrs",
      leaves: 2,
    },
  ];

  const query = searchQuery.toLowerCase();
  const filtered = facultyList.filter((f) =>
    `${f.name} ${f.email}`.toLowerCase().includes(query)
  );

  return (
    <div
      className="absolute bg-white border-solid border-[#DFDFDF] shadow-sm overflow-hidden"
      style={{ 
        width: "1306px", 
        height: "320px",
        top: "330px",
        left: "27px",
        borderRadius: "12.23px",
        borderWidth: "1.83px"
      }}
    >
      {/* Data container with exact positioning */}
      <div 
        className="absolute"
        style={{
          width: "1156.39px",
          height: "327.72px",
          top: "18.34px",
          left: "72.15px"
        }}
      >
        {/* Header row */}
        <div className="flex items-center text-[13px] font-semibold text-[#6C7A90] border-b-2 border-[#1DA5FF] pb-3">
          <div className="flex-[1.7]">Faculty Name</div>
          <div className="flex-[1.7]">Email</div>
          <div className="flex-[0.8] text-center">Max load per day</div>
          <div className="flex-[0.8] text-center">Leaves per month</div>
          <div className="flex-[1] text-center">Assigned Subjects</div>
          <div className="w-20 text-center">Actions</div>
        </div>

        {/* Body rows */}
        <div
          className="overflow-y-auto custom-scroll"
          style={{ height: "calc(327.72px - 56px)" }}
        >
          {filtered.map((f, idx) => (
            <div
              key={idx}
              className={`flex items-center py-5 text-sm border-b border-[#ECF0F4] ${
                idx === filtered.length - 1 ? "border-b-0" : ""
              } hover:bg-[#F7FAFF] transition`}
            >
              {/* Faculty Name */}
              <div className="flex-[1.7] text-[#4C5968]">{f.name}</div>

              {/* Email */}
              <div className="flex-[1.7] text-[13px] text-[#8C96A3]">{f.email}</div>

              {/* Max load */}
              <div className="flex-[0.8] text-center text-[13px] text-[#4C5968]">
                {f.maxLoad}
              </div>

              {/* Leaves */}
              <div className="flex-[0.8] text-center text-[13px] text-[#4C5968]">
                {f.leaves}
              </div>

              {/* Assigned Subjects */}
              <div className="flex-[1] text-center">
                <button className="text-[13px] font-medium text-[#1A8FE3] hover:underline">
                  See List
                </button>
              </div>

              {/* Actions */}
              <div className="w-20 flex items-center justify-center gap-3">
                <button className="text-[#C0C6D0] hover:text-[#1A8FE3]">
                  <Edit2 size={15} />
                </button>
                <button className="text-[#C0C6D0] hover:text-[#F04438]">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Track */}
      <div
        className="absolute"
        style={{
          width: "9.78px",
          height: "289.87px",
          top: "16.13px",
          left: "1274.21px",
          borderRadius: "44.02px",
          borderWidth: "1.22px",
          borderColor: "#E5E5E5",
          borderStyle: "solid",
          background: "transparent"
        }}
      />

      {/* Custom Scrollbar Thumb */}
      <div
        className="absolute"
        style={{
          width: "12.23px",
          height: "33.97px",
          top: "16.97px",
          left: "1272.98px",
          borderRadius: "4.89px",
          background: "linear-gradient(180deg, #575757 -93.33%, #75CBF6 100%)"
        }}
      />

      {/* Scrollbar Styles */}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 9.78px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 44.02px;
          border: 1.22px solid #E5E5E5;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #575757 -93.33%, #75CBF6 100%);
          border-radius: 4.89px;
          width: 12.23px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #575757 -93.33%, #5BB8E8 100%);
        }
      `}</style>
    </div>
  );
};

// Main QuickAddFacultyScreen Component
export const QuickAddFacultyScreen = () => {
  const [showTable, setShowTable] = useState(false);
  const [facultyName, setFacultyName] = useState("");
  const [email, setEmail] = useState("");
  const [maxLoad, setMaxLoad] = useState("");
  const [leaves, setLeaves] = useState("");
  const [assignedSubjects, setAssignedSubjects] = useState("");

  const handleAddFaculty = () => {
    setShowTable(true);
  };

  return (
    <div
      className="bg-white w-full min-h-screen flex items-center justify-center p-8 overflow-hidden"
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Mulish:wght@400;500;600;700&display=swap');
          
          body {
            overflow: hidden;
          }
          
          ::-webkit-scrollbar {
            display: none;
          }
          
          * {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Main centered container */}
      <div className="relative" style={{ width: '1360px', minHeight: '750px' }}>
        
        {/* Logo - Ezey */}
        <div 
          className="absolute font-bold text-[#7b7a81] text-center tracking-[0] whitespace-nowrap"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            width: '95px',
            height: '58px',
            top: '6px',
            left: '26px',
            fontSize: '48px',
            lineHeight: '120%',
            textShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)'
          }}
        >
          Ezey
        </div>

        {/* Person logo */}
        <svg
          className="absolute"
          style={{
            width: '30px',
            height: '30px',
            top: '90px',
            left: '28px'
          }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>

        {/* Quick add Faculty heading */}
        <div 
          className="absolute font-bold text-[#265668] text-center tracking-[0] whitespace-nowrap"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            width: '246px',
            height: '38px',
            top: '84px',
            left: '73px',
            fontSize: '32px',
            lineHeight: '120%'
          }}
        >
          Quick add Faculty
        </div>

        {/* Blue divider line */}
        <div 
          className="absolute bg-[#0077ff] shadow-[0px_4px_4px_#00000040]" 
          style={{ 
            width: '1306px',
            height: '2px',
            top: '143px', 
            left: '28px' 
          }} 
        />

        {/* Upload File Button - Before Click */}
        {!showTable && (
          <div 
            className="absolute overflow-hidden"
            style={{
              width: '208px',
              height: '40px',
              top: '88px',
              left: '1126px',
              borderRadius: '6px'
            }}
          >
            <Component
              className="!w-full !h-full !relative !top-0 !left-0"
              headingClassName="!h-[19px] !mt-[11px] !ml-[7.5px] ![position:unset] !left-[unset] !w-48 !top-[unset]"
              property1="variant-11"
            />
          </div>
        )}

        {/* Upload File + Add Faculty Buttons - After Click */}
        {showTable && (
          <div 
            className="absolute flex"
            style={{
              width: '428px',
              height: '40px',
              top: '95px',
              left: '906px',
              borderRadius: '6px',
              borderWidth: '1px',
              borderColor: '#BFBFBF',
              borderStyle: 'solid'
            }}
          >
            <button
              className="flex-1 bg-[linear-gradient(0deg,rgba(38,87,104,1)_0%,rgba(75,172,206,1)_100%)] text-white font-medium text-base hover:opacity-90 transition-opacity"
              style={{
                fontFamily: 'Mulish, sans-serif',
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px'
              }}
            >
              Upload File ( CSV / XLSX )
            </button>
            <button
              onClick={handleAddFaculty}
              className="flex-1 bg-white text-[#265768] font-medium text-base border-l border-[#BFBFBF] hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Mulish, sans-serif',
                borderTopRightRadius: '6px',
                borderBottomRightRadius: '6px'
              }}
            >
              Add Faculty
            </button>
          </div>
        )}

        {/* Faculty Name Input */}
        <div className="absolute" style={{ top: '156px', left: '28px' }}>
          <div 
            className="font-semibold text-[#265768] text-center tracking-[0] mb-[5px]"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '91px',
              height: '21px',
              fontSize: '14px',
              lineHeight: '150%'
            }}
          >
            Faculty Name
          </div>

          <input
            type="text"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            placeholder="e.g. Mrs Pooja Shukla"
            className="px-4 bg-white text-[#265768] text-xs outline-none"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '274.5px',
              height: '40px',
              borderRadius: '15px',
              borderWidth: '1.5px',
              borderColor: '#DFDFDF',
              borderStyle: 'solid'
            }}
          />
        </div>

        {/* Email Input */}
        <div className="absolute" style={{ top: '156px', left: '327px' }}>
          <div 
            className="font-semibold text-[#265768] text-center tracking-[0] mb-[5px]"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '91px',
              height: '21px',
              fontSize: '14px',
              lineHeight: '150%'
            }}
          >
            Email
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. poojasunshore@gmail.com"
            className="px-4 bg-white text-[#265768] text-xs outline-none"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '274.5px',
              height: '40px',
              borderRadius: '15px',
              borderWidth: '1.5px',
              borderColor: '#DFDFDF',
              borderStyle: 'solid'
            }}
          />
        </div>

        {/* Max load per day Input */}
        <div className="absolute" style={{ top: '156px', left: '626px' }}>
          <div 
            className="font-semibold text-[#265768] text-center tracking-[0] mb-[5px]"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '110px',
              height: '21px',
              fontSize: '14px',
              lineHeight: '150%'
            }}
          >
            Max load per day
          </div>

          <input
            type="text"
            value={maxLoad}
            onChange={(e) => setMaxLoad(e.target.value)}
            placeholder="e.g. 5 Hrs"
            className="px-4 bg-white text-[#265768] text-xs outline-none"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '274.5px',
              height: '40px',
              borderRadius: '15px',
              borderWidth: '1.5px',
              borderColor: '#DFDFDF',
              borderStyle: 'solid'
            }}
          />
        </div>

        {/* Leaves per month Input */}
        <div className="absolute" style={{ top: '156px', left: '925px' }}>
          <div 
            className="font-semibold text-[#265768] text-center tracking-[0] mb-[5px]"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '120px',
              height: '21px',
              fontSize: '14px',
              lineHeight: '150%'
            }}
          >
            Leaves per month
          </div>

          <input
            type="text"
            value={leaves}
            onChange={(e) => setLeaves(e.target.value)}
            placeholder="e.g 5"
            className="px-4 bg-white text-[#265768] text-xs outline-none"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '274.5px',
              height: '40px',
              borderRadius: '15px',
              borderWidth: '1.5px',
              borderColor: '#DFDFDF',
              borderStyle: 'solid'
            }}
          />
        </div>

        {/* Assigned subjects Input */}
        <div className="absolute" style={{ top: '243px', left: '28px' }}>
          <div 
            className="font-semibold text-[#265768] text-center tracking-[0] mb-[5px]"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '130px',
              height: '21px',
              fontSize: '14px',
              lineHeight: '150%'
            }}
          >
            Assigned subjects
          </div>

          <input
            type="text"
            value={assignedSubjects}
            onChange={(e) => setAssignedSubjects(e.target.value)}
            placeholder="e.g. DAA"
            className="px-4 bg-white text-[#265768] text-xs outline-none"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              width: '274.5px',
              height: '40px',
              borderRadius: '15px',
              borderWidth: '1.5px',
              borderColor: '#DFDFDF',
              borderStyle: 'solid'
            }}
          />
        </div>

        {/* Add faculty button */}
        <button 
          onClick={handleAddFaculty}
          className="absolute flex items-center gap-1 cursor-pointer hover:opacity-70 transition"
          style={{
            top: '252px',
            left: '1252.5px'
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#26576880] flex items-center justify-center text-white text-[10px]">
            +
          </div>
          <div 
            className="font-medium text-[#26576880] whitespace-nowrap"
            style={{ 
              fontFamily: 'Mulish, sans-serif',
              fontSize: '12px',
              lineHeight: '14.4px'
            }}
          >
            Add faculty
          </div>
        </button>

        {/* Gray divider line */}
        <div 
          className="absolute bg-[#d9d9d9]" 
          style={{ 
            width: '1306px',
            height: '2px',
            top: '319px', 
            left: '28px' 
          }} 
        />

        {/* Main content - conditionally show table or empty state */}
        {showTable ? (
          <FacultyData searchQuery="" />
        ) : (
          <div 
            className="absolute flex flex-col bg-white overflow-hidden border-solid border-[#dfdfdf]"
            style={{
              width: '1306px',
              height: '320px',
              top: '330px',
              left: '27px',
              borderRadius: '12.23px',
              borderWidth: '1.83px'
            }}
          >
            {/* Camera Image */}
            <div 
              className="absolute shadow-[0px_4px_4px_#00000040] bg-[url(https://c.animaapp.com/mjlb1n9pyRcYDw/img/frame-254.png)] bg-cover bg-center"
              style={{
                width: '284.9px',
                height: '169.62px',
                top: '63.27px',
                left: '503.52px',
                borderRadius: '4.96px'
              }}
            />

            {/* No Data Text */}
            <div 
              className="absolute font-bold text-[#aeadad] text-center tracking-[0] whitespace-nowrap"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                width: '101px',
                height: '32px',
                top: '257px',
                left: '602px',
                fontSize: '26.48px',
                lineHeight: '120%'
              }}
            >
              No Data !
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default QuickAddFacultyScreen;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      