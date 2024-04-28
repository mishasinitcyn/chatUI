export interface User {
    name: string;
    avatar: string;
}

export interface Message {
    text: string;
    date: string;
    reply: boolean;
    user: User;
}

export const default_message  = {
    "text": "Hello! Feel free to ask me questions about the course material and I will try my best to answer them with citations from publicly available textbooks.",
    "date": "2024-04-26T16:11:22.349Z",
    "reply": false,
    "user": {
        "name": "System",
        // "avatar": "url-to-system-avatar"
    }
}