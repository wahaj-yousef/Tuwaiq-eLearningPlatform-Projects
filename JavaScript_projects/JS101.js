//BookStore project --- tuwaiq codes >> JS101 course

//2D array to sort books (bookId, book_title, author, price, quantity)
Books = [
    [1, "Start with why", "Simon Sinek", 80.0, 13],
    [2, "But how do it know", "J. Clark Scott", 59.9, 22],
    [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
    [4, "Zero to One", "Peter Thiel", 45.0, 12],
    [5, "You don't know JS", "Kyle Simpson", 39.9, 9]
]

console.log(`\n Search by bookId: (3)`)
for (let bookId of Books){
    if (bookId.includes(3)){
        console.log(`
        Book Id       : ${bookId[0]}
        Book Title    : ${bookId[1]}
        Book Author   : ${bookId[2]}
        Book Price    : ${bookId[3]}$
        Book Quantity : ${bookId[4]}
                  `)
    }
}

console.log(`\n Search by Book title: ('Zero to One')`)
for (let bookTitle of Books){
    if (bookTitle.includes('Zero to One')){
        console.log(`
        Book Id       : ${bookTitle[0]}
        Book Title    : ${bookTitle[1]}
        Book Author   : ${bookTitle[2]}
        Book Price    : ${bookTitle[3]}$
        Book Quantity : ${bookTitle[4]}
                 `)
    }
}

console.log(`\n Search by author name: ('Kyle Simpson')`)
for (let bookAuthor of Books){
    if (bookAuthor.includes('Kyle Simpson')){
        console.log(`
        Book Id       : ${bookAuthor[0]}
        Book Title    : ${bookAuthor[1]}
        Book Author   : ${bookAuthor[2]}
        Book Price    : ${bookAuthor[3]}$
        Book Quantity : ${bookAuthor[4]}
                 `)
    }
}


/*
buy a book with specific quantity in you balance 
this loob will check if you can buy the book and update the array 
if you buy it 
*/
const bTitle = 'Zero to One';
const quantity = 1;
const balance = 200;

let indexofNewBook =0
const newBook=Books.find((book , i) =>{
    indexofNewBook=i
    return (book.includes(bTitle)) 
    });

    
    if (newBook){
       if(newBook[4]>= quantity ){

            if(newBook[3]*quantity<= (balance) ){
            console.log(`
            -- p r o u d c t   i n f o : --
            Book Id         :     ${newBook[0]}
            Book Title      :     ${newBook[1]}
            Book Author     :     ${newBook[2]}
            Book Price      :     ${newBook[3]}$
            ----/---- your bill  ----/----
            Quantity        :     ${quantity}
            Total Price     :     ${newBook[3]*quantity}$
            cash            :     ${balance}$     
            Change          :     ${balance-newBook[3]*quantity}$
            
            `); 
            //to update the book quantity after this purchase:
            Books[indexofNewBook][4]-=quantity

            }else{ console.log( `You don't have the enough balance !` )  }    
       }else{ console.log( `Jsut ${newBook[4]} books left !`)}
    } else{console.log( `The book title (${bTitle}) not found !`)}




    //to check Books array after updating
    //console.log(Books)
