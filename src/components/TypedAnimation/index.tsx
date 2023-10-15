import { useEffect, useState } from "react";

interface TypedAnimationProps {
  strings: string[]; 
  typeSpeed: number; 
  backSpeed: number; 
  backDelay: number; // Delay before backspacing in milliseconds
}

export const TypedAnimation = ({
  strings,         
  typeSpeed,      
  backSpeed,      
  backDelay,     
}: TypedAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Keep track of the current string index
  const [currentText, setCurrentText] = useState(strings[0]); // The text currently displayed
  const [showCursor, setShowCursor] = useState(true); // Whether to show the cursor
  const [isErasing, setIsErasing] = useState(false); // Whether text is being erased

  // Create an effect that controls the typing and erasing animation.
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Erasing text
    if (isErasing) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          // Remove the last character from the current text
          const newText = currentText.slice(0, -1);
          setCurrentText(newText);
        }, backSpeed);
      } else {
        // Finished erasing, update states and prepare for the next string
        setIsErasing(false);
      
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setTimeout(() => {
          // Show the cursor during the pause
          setShowCursor(true);
        }, backDelay);
      }
    } else {
      if (currentText !== strings[currentIndex]) {
        timeout = setTimeout(() => {
          // Append the next character from the current string to the current text
          const remainingText = strings[currentIndex].substring(
            currentText.length,
            currentText.length + 1
          );
          setCurrentText((prevText) => prevText + remainingText);
        }, typeSpeed);
      } else {
        // Finished typing the current string, prepare for erasing
        setTimeout(() => {
          setIsErasing(true);
        }, 3000); // Delay for 3 seconds before erasing
      }
    }

    // Return a cleanup function to clear the timeout when the component unmounts.
    return () => {
      clearTimeout(timeout);
    };
  }, [currentText, currentIndex, isErasing, strings, typeSpeed, backSpeed, backDelay]);

  // Return the JSX for rendering the component.
  return (
    <div className="flex flex-row justify-center items-center align-middle min-w-full">
  <span className="text-white text-6xl font-bold mr-5" >
    I'm a
  </span>
  <span className="text-6xl font-bold text-purple-500">
    {currentText}
  </span>
  {/* Show the current text */}
  {showCursor && <span className="text-white text-8xl font-bold ml-5">|</span>}
  {/* Show the cursor when `showCursor` is true */}
</div>

  );
};
