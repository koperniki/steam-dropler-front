export interface Account
    {
        id: string;

        status: string;

        userName: string;

        UuserPass: string;

        email: string;
     
        registerDate: Date | string;

        deviceId: number | null;

        steamId: number | null;

        accountId: number | null;

        sentryHashExist: boolean;

        loginKey: string;

        steamGuardSource: number;

        maiConfigId: string;
    }