let cards = [
    {
        name : "Ellie , Dream coding",
        company : "Samsung Electronic",
        title : "soft engineer",
        email : "dream.coder.ellie@gmail.com",
        message : "Don't forget to code your dream",
    },
    {
        name : "Bob",
        company : "Uber",
        title : "senior soft engineer",
        email : "bob@gmail.com",
        message : "I love coding",
    },
    {
        name : "Chris",
        company : "Instagram",
        title : "product manager",
        email : "Chris@gmail.com",
        message : "Design your dream",
    },
]
class Card {
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
