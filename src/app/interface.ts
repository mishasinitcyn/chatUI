export const DefaultMessage  = {
    "text": "Hello! Feel free to ask me questions about Machine Learning and I will try my best to cite my answers with textbook chapters from my knowledge base.",
    "date": "2024-04-26T16:11:22.349Z",
    "reply": false,
    "user": {
        "name": "Assistant",
    }
}

export const TextbookChapters = [
    {
      title: "Math for Machine Learning",
      chapters: ["3", "4", "6", "7", "12"]
    },
    {
      title: "The Elements of Statistical Learning",
      chapters: ["7.10", "8.2", "8.3", "12"]
    },
    {
      title: "An Introduction to Statistical Learning",
      chapters: ["2.2.2", "6.2", "9", "10"]
    },
    {
      title: "Deep Learning",
      chapters: ["5", "6", "8", "9", "14"]
    },
    {
      title: "Stanford CS229",
      chapters: ["6", "7", "8", "9"]
    }
  ];

export const TextbookPath = 'assets/PDF';
export const AssistantIcon = "assets/icons/EmojiNatureIcon.png";
export const ReadingIcon = "assets/icons/BookOutline.png"
export const QueryLimit = 5;