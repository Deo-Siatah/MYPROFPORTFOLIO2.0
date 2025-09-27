import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsPieChart = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Sample tech skills data - replace with your actual skills and years
  const skillsData = [
    { name: 'React.JS', year: '2025', value: 15, color: '#61DAFB' },
    { name: 'Node.js', year: '2025', value: 12, color: '#68A063' },
    { name: 'C', year: '2024', value: 18, color: '#3776AB' },
    { name: 'C++', year: '2024', value: 20, color: '#F7DF1E' },
    { name: 'MongoDB', year: '2025', value: 10, color: '#47A248' },
    { name: 'Python', year: '2024', value: 8, color: '#3178C6' },
    { name: 'JavaScript', year: '2025', value: 7, color: '#000000' },
    { name: 'MySQL', year: '2024', value: 10, color: '#336791' }
  ];

  // Calculate positions for labels around the circle
  const calculateLabelPosition = (index, total, radius = 180) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
      angle
    };
  };

  const centerPercentage = skillsData.reduce((sum, skill) => sum + skill.value, 0);

  return (
    <div className="flex items-center justify-center min-h-screen  p-8" id='experience'>
      <div className="relative">
        <motion.div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main Pie Chart Container */}
          <div className="w-96 h-96 relative ">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1000}
                >
                  {skillsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color}
                      stroke="#1f2937"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center Percentage */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold text-orange-500"
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    color: isHovered ? "#ff6b35" : "#f97316"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-400 mt-1">Skills</div>
              </div>
            </motion.div>

            {/* Floating Skill Labels */}
            <AnimatePresence>
              {isHovered && skillsData.map((skill, index) => {
                const position = calculateLabelPosition(index, skillsData.length);
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute pointer-events-none"
                    initial={{ 
                      opacity: 0, 
                      scale: 0,
                      x: position.x * 0.3,
                      y: position.y * 0.3
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: position.x,
                      y: position.y
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0,
                      x: position.x * 0.3,
                      y: position.y * 0.3
                    }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.div 
                      className="flex items-center space-x-2 bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      <div className="text-white text-sm font-medium">
                        {skill.name}
                      </div>
                      <div className="text-orange-400 text-xs font-semibold">
                        {skill.year}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Connecting Lines (when hovered) */}
            <AnimatePresence>
              {isHovered && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {skillsData.map((skill, index) => {
                    const position = calculateLabelPosition(index, skillsData.length, 120);
                    const labelPosition = calculateLabelPosition(index, skillsData.length, 180);
                    return (
                      <motion.line
                        key={`line-${index}`}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${labelPosition.x}px)`}
                        y2={`calc(50% + ${labelPosition.y}px)`}
                        stroke={skill.color}
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        exit={{ pathLength: 0, opacity: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      />
                    );
                  })}
                </svg>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-sm">
            Hover over the chart to see acquisition years
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPieChart;