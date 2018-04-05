const random_images = [
    'https://react.semantic-ui.com/assets/images/avatar/large/matthew.png',
    'https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg',
    'https://react.semantic-ui.com/assets/images/avatar/large/rachel.png',
    'https://react.semantic-ui.com/assets/images/avatar/large/daniel.jpg',
    'https://react.semantic-ui.com/assets/images/avatar/large/steve.jpg',
    
]

function random_image() {
    var index = Math.floor(Math.random() * random_images.length);
    return random_images[index];
}

export default random_image