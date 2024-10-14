const postsMockData = [
    {
        id: '1',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '1: This is test title!',
        text: 'This is test text!'
    },
    {
        id: '2',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '2: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '3',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '3: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '4',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '4: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '5',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '5: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '6',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '6: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '7',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '7: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '8',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '8: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '9',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '9: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '10',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '10: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '11',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '11: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '12',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '12: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '13',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '13: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '14',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '14: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '16',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '15: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '17',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '16: This is test title!',
        text: 'This is test text!',
    },
    {
        id: '18',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '17 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '19',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '18 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '20',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '19 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '21',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '20 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '22',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '21 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '23',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '22 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '24',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '23 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '25',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '24 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '26',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '25 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '27',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '26 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '28',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '27 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '29',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '28 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '30',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '29 This is test title!',
        text: 'This is test text!',
    },
    {
        id: '31',
        imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
        title: '30 This is test title!',
        text: 'This is test text!',
    }
]

export default postsMockData;