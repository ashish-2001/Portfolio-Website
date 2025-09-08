import React, { useState, useEffect } from "react";

export default function TypeWriter() {
  // Words to type
    const words = [" Web Development", " Frontend Developer", " Backend Developer", " Devops"];

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {

        const currentWord = words[wordIndex]; 
        const speed = isDeleting ? 40 : 70;

        const timeout = setTimeout(() => {
        
        setText((prev) =>
            isDeleting
            ? currentWord.substring(0, prev.length - 1) 
            : currentWord.substring(0, prev.length + 1) 
    );

    
    if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
    }

    
    else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length); 
    }
    }, speed);

    return () => clearTimeout(timeout); 
    }, [text, isDeleting, wordIndex]);

    return (
        <h1 className="text-2xl font-bold text-blue-600">
            {" "}{text}
            <span className="blinking-cursor">|</span>
        </h1>
    );
}
