import { GameOwnedInfo } from "./game-owned-info";
import { IFamilySharingInfo } from "./famili-sharing-info";


export interface IAccount
    {
        id: string;

        status: string;

        userName: string;

        userPass: string;

        email: string;
     
        registerDate: Date | string;

        deviceId: number | null;

        steamId: number | null;

        accountId: number | null;

        sentryHashExist: boolean;

        loginKey: string;

        steamGuardSource: number;

        mailConfigId: string;

        gamesInfo: GameOwnedInfo[];

        familySharingInfos: IFamilySharingInfo[];

        dropCount: number;

        balance: string;

        accountFlags: string;
    }

    export class SteamAccount implements IAccount
    {
        public id: string;

        public status: string;

        public userName: string;

        public userPass: string;

        public email: string;
     
        public registerDate: Date | string;

        public deviceId: number | null;

        public steamId: number | null;

        public accountId: number | null;

        public sentryHashExist: boolean;

        public loginKey: string;

        public steamGuardSource: number;

        public mailConfigId: string;

        public gamesInfo: GameOwnedInfo[];

        public familySharingInfos: IFamilySharingInfo[];

        public dropCount: number;

        public balance: string;

        public accountFlags: string;
    }