interface Notice {
    id?: string,
    code: number,
    text: string,
    user: string,
    title?: string,
    offer?: string,
    news?: string,
    createdAt?: Date,
    isRead: boolean,
    isSend: boolean
}