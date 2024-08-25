document.addEventListener('DOMContentLoaded', () => {
    const promptDisplay = document.getElementById('prompt-display');

    const examplePrompts = [
        "Summarize the news headlines I missed today",
        "Create a personalized workout plan for the week",
        "Generate a script to monitor my website's uptime",
        "Create a task to periodically clean up my codebase"
    ];

    let currentPromptIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;
    let deletingSpeed = 40;
    let pauseBetweenPrompts = 2500;

    function typePrompt() {
        if (!promptDisplay) return;

        const currentPrompt = examplePrompts[currentPromptIndex];

        if (isDeleting) {
            promptDisplay.textContent = currentPrompt.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            promptDisplay.textContent = currentPrompt.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentPrompt.length) {
            isDeleting = true;
            setTimeout(typePrompt, pauseBetweenPrompts);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPromptIndex = (currentPromptIndex + 1) % examplePrompts.length;
            setTimeout(typePrompt, typingSpeed);
        } else {
            setTimeout(typePrompt, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    typePrompt();
});
