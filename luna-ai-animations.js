// Luna AI Animations Component

class LunaAIAnimations {
  constructor() {
    this.animationContainer = document.createElement('div');
    this.animationContainer.id = 'luna-ai-animations';
    this.animationContainer.style.position = 'fixed';
    this.animationContainer.style.top = '20px';
    this.animationContainer.style.right = '20px';
    this.animationContainer.style.zIndex = '1000';
    document.body.appendChild(this.animationContainer);
  }

  showThinking() {
    this.animationContainer.innerHTML = `
      <div class="thinking-animation">
        <i class="fas fa-brain fa-spin"></i>
        <span>Luna AI is thinking...</span>
      </div>
    `;
  }

  showCodeAddition(code) {
    this.animationContainer.innerHTML = `
      <div class="code-addition-animation">
        <i class="fas fa-plus-circle" style="color: green;"></i>
        <pre style="background-color: #e6ffe6;">${code}</pre>
      </div>
    `;
  }

  showCodeRemoval(code) {
    this.animationContainer.innerHTML = `
      <div class="code-removal-animation">
        <i class="fas fa-minus-circle" style="color: red;"></i>
        <pre style="background-color: #ffe6e6;">${code}</pre>
      </div>
    `;
  }

  showProgressUpdate(progress) {
    this.animationContainer.innerHTML = `
      <div class="progress-update-animation">
        <i class="fas fa-tasks"></i>
        <span>${progress}% complete</span>
      </div>
    `;
  }

  showErrorHandling(error) {
    this.animationContainer.innerHTML = `
      <div class="error-handling-animation">
        <i class="fas fa-exclamation-triangle" style="color: orange;"></i>
        <span>${error}</span>
      </div>
    `;
  }

  showTesting() {
    this.animationContainer.innerHTML = `
      <div class="testing-animation">
        <i class="fas fa-vial fa-spin"></i>
        <span>Running tests...</span>
      </div>
    `;
  }

  showUserPrompt(prompt) {
    this.animationContainer.innerHTML = `
      <div class="user-prompt-animation">
        <i class="fas fa-question-circle"></i>
        <span>${prompt}</span>
      </div>
    `;
  }
}

// Export the component
window.LunaAIAnimations = LunaAIAnimations;
