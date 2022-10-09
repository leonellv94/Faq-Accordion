const answers = document.querySelectorAll('.faq_answer_hidden');
const questions = document.querySelectorAll(".faq_question");


questions.forEach((question, i) => {
    question.addEventListener('click', () => {
        if (question.className === 'faq_question') {
            questions[i].className = 'faq_question_black'
            answers[i].className = 'faq_answer'
        } else {
            questions[i].className = 'faq_question'
            answers[i].className = 'faq_answer_hidden'
        }
    })
})





