let cards = [
    {
        id:'1',
        name : "Ellie , Dream coding",
        company : "Samsung Electronic",
        theme: "light",
        title : "soft engineer",
        email : "dream.coder.ellie@gmail.com",
        message : "Don't forget to code your dream",
        fileName:"ellie",
        fileURL : null,
    },
    {
        id:'2',
        name : "Bob",
        company : "Uber",
        theme: "colorful",
        title : "senior soft engineer",
        email : "bob@gmail.com",
        message : "I love coding",
        fileName:"bob",
        fileURL : null,
    },
    {
        id:'3',
        name : "Chris",
        company : "Instagram",
        theme: "dark",
        title : "product manager",
        email : "Chris@gmail.com",
        message : "Design your dream",
        fileName:"chris",
        fileURL : null,
    },
]
class Card {
    async getAll(){
       return cards;
    }

    async getName() {
        return cards.map(card => card.name);
    }

    async getCompany() {
        return cards.map(card => card.company);
    }

    async getTitle() {
        return cards.map(card => card.title);
    }

    async getEmail() {
        return cards.map(card => card.email);
    }

    async getMessage(){
        return cards.map(card => card.message);
    }
}

export default Card
