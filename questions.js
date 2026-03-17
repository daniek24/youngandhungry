// ─────────────────────────────────────────────────────────────
//  QUIZ QUESTIONS
//  Add as many question objects as you like.
//  correctAnswer: 0-based index of the correct option.
//  explanation: text shown after the user answers (correct or not).
// ─────────────────────────────────────────────────────────────
const questions = [
    {
        question: "What does AI stand for?",
        options: ["Automatic Internet", "Artificial Intelligence", "Advanced Information", "Automated Input"],
        correctAnswer: 1,
        explanation: "AI stands for Artificial Intelligence — the ability of a computer or machine to perform tasks that typically require human thinking, like recognizing images, understanding speech, or making decisions.",
    },
    {
        question: "Which of the following is an example of AI you might use in everyday life?",
        options: ["A paper notebook", "A pencil sharpener", "A voice assistant like Siri or Alexa", "A bicycle"],
        correctAnswer: 2,
        explanation: "Voice assistants like Siri, Alexa, and Google Assistant use AI to understand what you say and respond helpfully. They learn from millions of conversations to get better over time.",
    },
    {
        question: "How does a recommendation system (like on YouTube) decide what to suggest to you?",
        options: ["A person manually picks videos for each user", "It suggests random videos", "It learns from what you've watched before", "It always recommends the newest videos"],
        correctAnswer: 2,
        explanation: "Recommendation systems use machine learning to study your watch history, likes, and viewing habits. They then find patterns and suggest content you're likely to enjoy — which is why your feed feels so personalized.",
    },
    {
        question: "What is 'machine learning'?",
        options: ["Teaching machines to learn from data and improve over time", "A class about how to fix computers", "Robots learning to walk", "Typing on a keyboard faster"],
        correctAnswer: 0,
        explanation: "Machine learning is a branch of AI where a program learns patterns from large amounts of data — without being explicitly programmed with every rule. The more data it sees, the better it gets.",
    },
    {
        question: "Which of these could be a potential downside of AI?",
        options: ["It can help doctors detect diseases", "It can recommend music you like", "It might spread wrong information if not checked", "It can translate languages"],
        correctAnswer: 2,
        explanation: "AI systems can generate or amplify misinformation if they're trained on biased or inaccurate data. That's why it's important to verify AI-generated content and think critically about where information comes from.",
    },
    {
        question: "What does it mean to 'train' an AI?",
        options: ["Taking an AI robot to the gym", "Showing an AI many examples so it can learn patterns", "Turning an AI on for the first time", "Writing computer code by hand"],
        correctAnswer: 1,
        explanation: "Training an AI means feeding it thousands — sometimes millions — of examples so it can figure out patterns on its own. For example, showing it many photos of cats helps it learn what a cat looks like.",
    },
    {
        question: "Why is it important to think critically about information that AI gives you?",
        options: ["Because AI always lies", "Because AI is always correct and needs no checking", "Because AI can make mistakes or have biased information", "Because AI only speaks in other languages"],
        correctAnswer: 2,
        explanation: "AI can 'hallucinate' — confidently state things that are simply wrong. It can also reflect biases present in its training data. Always cross-check important facts from AI with reliable sources.",
    },
];