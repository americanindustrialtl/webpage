// Standardized color palette for consistent UI
export const colors = {
  // Primary Blue Colors
  primary: {
    50: "#eff6ff", // blue-50 - very light backgrounds
    100: "#dbeafe", // blue-100 - light backgrounds, icon containers
    200: "#bfdbfe", // blue-200 - borders, dividers
    600: "#2563eb", // blue-600 - primary buttons, main brand color
    700: "#1d4ed8", // blue-700 - hover states, active states
  },

  // Neutral Colors
  neutral: {
    50: "#f9fafb", // gray-50 - page backgrounds
    100: "#f3f4f6", // gray-100 - card backgrounds
    600: "#4b5563", // gray-600 - secondary text
    700: "#374151", // gray-700 - primary text
    900: "#111827", // gray-900 - headings, important text
  },

  // Status Colors
  success: {
    600: "#16a34a", // green-600 - success states, checkmarks
    50: "#f0fdf4", // green-50 - success backgrounds
  },

  warning: {
    600: "#ca8a04", // yellow-600 - warning states
    50: "#fefce8", // yellow-50 - warning backgrounds
  },

  danger: {
    600: "#dc2626", // red-600 - error states
    50: "#fef2f2", // red-50 - error backgrounds
  },
} as const

// Standardized component styles
export const componentStyles = {
  button: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
    outline: "border border-blue-200 text-blue-600 hover:bg-blue-50",
  },

  card: {
    base: "bg-white rounded-2xl border border-gray-100 shadow-sm",
    elevated: "bg-white rounded-2xl border border-gray-100 shadow-lg",
    hover: "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
  },

  icon: {
    container: "rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center",
    brand: "rounded-lg bg-blue-600 text-white flex items-center justify-center",
  },

  section: {
    background: "bg-gray-50",
    padding: "py-16",
    container: "max-w-6xl mx-auto px-4",
  },
} as const
