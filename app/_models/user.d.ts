interface User {
    _id?: string,
    username?: string,
    deleted?:boolean,
    blocked?:boolean,
    emails?: Array<{
        address: string,
        verified: boolean,
        visible?: boolean,
        main?: boolean
    }>,
    invite: string,
    profile?: {
        name?: string,
        contacts?: Array<{
            type: string,
            contact: string
        }>,
        gender?: string,
        minPayout?: number,
        avatar?: string,
        payments?: Array<{
            type: string,
            value: string
        }>,
        invite: string,
        autoPay?: boolean,
        balance?: {
            hold?: number,
            cash?: number,
            canDebt?: number,
            isPreOut?: boolean,
            valutes?: Array<any>
        },
        hold?: number,
        groups?: Array<string>
    },
    services?: Object,
    roles?: Object,
    heartbeat?: Date,
    createdAt?: Date,
    status?: {
        idle?: boolean,
        online?: boolean,
        lastActivity?: Date,
        lastLogin?: {
            date?: Date,
            ipAddr?: string,
            userAgent?: string
        }
    }
}