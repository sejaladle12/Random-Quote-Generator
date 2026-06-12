function generateQuote() {

    const data = [
        {
            text: "You have the right to perform your duty, but not to the fruits of your actions.",
            img: "https://media.licdn.com/dms/image/v2/D5612AQGi5CIwq4zpIA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694327362858?e=2147483647&v=beta&t=-XMnxHGLOAe0u6e6pQBNu295FFCcza2yIp9lPcfb388"
        },
        {
            text: "Change is the law of the universe.",
            img: "https://www.learner.org/wp-content/uploads/2019/05/invitation-to-world-literature-the-bhagavad-gita-arjuna-and-krishna-blow-battle-horns-1298x672.jpg"
        },
        {
            text: "A person who is not disturbed by happiness and distress is eligible for liberation.",
            img: "https://nitaigaurangablog.wordpress.com/wp-content/uploads/2017/01/dfgfdgdfg1.jpg?w=1000"
        },
        {
            text: "Set your heart upon your work but never its reward.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_k1JIxCnu-eTSw44UoRA0vyM1a92XbmsGA&s"
        }
    ];

    const random = data[Math.floor(Math.random() * data.length)];

    document.getElementById("quote").innerText = random.text;
    document.getElementById("quoteImg").src = random.img;
}