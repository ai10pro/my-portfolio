// script.js

document.addEventListener("DOMContentLoaded", function() {
    const codeBlocks = document.querySelectorAll('pre.line-numbers code');
    codeBlocks.forEach(block => {
        const lines = block.innerHTML.split('\n');
        block.innerHTML = lines.map(line => `<span>${line}</span>`).join('\n');
    });
});