// Array of 150 elements (Just a sample, you'll need to add more)
const elements = [
    'Water', 'Fire', 'Earth', 'Air', 'Electricity', 'Disease', 'Rock', 'Iron', 
    'Sand', 'Light', 'Darkness', 'Plasma', 'Gold', 'Silver', 'Virus', 
    'Bacteria', 'Storm', 'Wind', 'Mud', 'Lava', 'Ash', 'Diamond', 'Emerald', 
    'Ruby', 'Sapphire', 'Wood', 'Plastic', 'Steel', 'Copper', 'Quartz'
    // Continue adding up to 150 elements
];

const elementsList = document.getElementById('elements');
const dropZone = document.getElementById('drop-zone');
const resultOutput = document.getElementById('result-output');

// Create element list in sidebar
elements.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    li.draggable = true;
    li.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', element);
    });
    elementsList.appendChild(li);
});

// Handle dropping elements into the crafting area
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedElement = e.dataTransfer.getData('text');
    resultOutput.textContent = `You combined: ${draggedElement} with something else!`;
});
