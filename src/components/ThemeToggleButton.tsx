import useTheme from "@/context/theme";

export const ThemeToggleButton = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleChange = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={themeMode === "dark"}
          onChange={handleChange}
        />
        <div className="w-12 h-6 bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
              themeMode === "dark" ? "translate-x-6" : "translate-x-0"
            }`}></div>
        </div>
        <span className="ml-3 text-gray-900 dark:text-gray-100">
          {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
};
