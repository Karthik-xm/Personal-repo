const bookRead = (library) =>{
library.forEach(book => {
    if (book.alreadyread) {
        console.log(`You already read "${book.title}" by "${book.author}".`);
    } else {
        console.log(`You still need to read "${book.title}" by "${book.author}".`);
    }
});
}

var library = [ 
    {
        title: 'The India Story',
        author: 'Bimal Jalal',
        alreadyread: false
    },
    {
        title: 'Grand Ma\'s bag of Stories',
        author: 'Sudgha Murthy',
        alreadyread: false
    },
    {
        title: 'Two States',
        author: 'Chethan Bhagat',
        alreadyread: true
    },
    {
        title: 'Lal Salam',
        author: 'Smriti Irani',
        alreadyread: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        alreadyread: false
    }
];
bookRead(library);