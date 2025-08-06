module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // React ke liye
  theme: {
    extend: {
      colors: {
        primary: '#002b5c',     // Navy Blue
        accent: '#00aaff',      // Sky Blue
        background: '#f4f6f8',  // Light Gray
        darkText: '#333333',    // For main text
        success: '#34a853',     // For status
        love: '#0b2842f3',       // For love
        couple: '#14638dff',      // For couple
      },
       animation: {
    'spin-slow': 'spin 30s linear infinite',
  } , 
   transform: ['group-hover'],
  perspective: {
    '1200': '1200px',
  },
    },
  },
  plugins: [],
};
