const message_generator = {
    0: [
        "The only way to do great work is to love what you do",
        "Believe you can and you're halfway there",
        "It always seems impossible until it's done"
    ],
    1: [
        "Success is not final, failure is not fatal: It is the courage to continue that counts",
        "Life is what happens when you're busy making other plans",
        "You must be the change you wish to see in the world"
    ],
    2: [
        "The world breaks everyone, and afterward, some are strong at the broken places",
        "If you're not making mistakes, then you're not making decisions",
        "You can't wait for inspiration. You have to go after it with a club"
    ]
};

function mix_message() {
    // Function to generate a random index based on the length of the input array
    function getRandomIndex(array) {
        return Math.floor(Math.random() * array.length);
    }

    // Select random category and message from that category
    let firstCategoryIndex = getRandomIndex(Object.keys(message_generator));
    let firstMessage = message_generator[firstCategoryIndex][getRandomIndex(message_generator[firstCategoryIndex])];

    // Select random conjunction
    const conjunctions = [" AND ", " BUT ", " OR "];
    let randomConjunction = conjunctions[getRandomIndex(conjunctions)];

    // Select another random category and message
    let secondCategoryIndex = getRandomIndex(Object.keys(message_generator));
    let secondMessage = message_generator[secondCategoryIndex][getRandomIndex(message_generator[secondCategoryIndex])];

    // Combine parts to form the final message
    return firstMessage + "<br>" + randomConjunction + "<br>" + secondMessage;
}
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userQuestionInput = document.getElementById('userQuestion');
    const message = mix_message();
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = message;
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    overlay.style.display = 'block';
    popup.style.display = 'block';
    
    // Clear the input field
    userQuestionInput.value = '';
    
    // Handling the removal of the popup and overlay
    overlay.addEventListener('click', function() {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    });
});