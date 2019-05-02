export class MaFileConfig implements IMafileConfig
    {

        public Id: string;

        public SteamAccountId: string;

        public body: string;
    }

export interface IMafileConfig
    {
         Id: string;

         SteamAccountId: string;

         body: string;
    }