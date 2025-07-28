import { useEffect, useState } from "react";

export default function TerminalIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentCommand, setCurrentCommand] = useState(0);
  const [completedCommands, setCompletedCommands] = useState([]);
  const [currentTypedText, setCurrentTypedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const commands = [
    "Initializing Portfolio...",
    "Loading Skills...",
    "Hello, I'm Arnab",
  ];

  useEffect(() => {
    if (currentCommand >= commands.length) {
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
      return;
    }

    const currentText = commands[currentCommand];

    if (currentCharIndex < currentText.length) {
      const timer = setTimeout(() => {
        setCurrentTypedText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timer);
    } else {
      // Finished typing current command
      const timer = setTimeout(() => {
        setCompletedCommands((prev) => [...prev, currentText]);
        setCurrentCommand((prev) => prev + 1);
        setCurrentTypedText("");
        setCurrentCharIndex(0);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [currentCommand, currentCharIndex]);

  if (!isVisible) return null;

  return (
    <div
      id="terminal-popup"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    >
      <div className="terminal-window p-6 max-w-md w-full mx-4">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-sm text-gray-400">terminal@portfolio</span>
        </div>
        <div
          id="terminal-text"
          className="text-sm leading-loose min-h-[100px] text-left"
          style={{ color: "var(--primary-light-green)" }}
        >
          {completedCommands.map((command, index) => (
            <div key={index} className="mb-2">
              <span style={{ color: "var(--primary-green)" }}>$</span>{" "}
              <span>{command}</span>
            </div>
          ))}
          {currentCommand < commands.length && (
            <div>
              <span style={{ color: "var(--primary-green)" }}>$</span>{" "}
              <span>
                {currentTypedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
