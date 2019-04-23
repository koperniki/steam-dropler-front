export class MailConfig implements IMailConfig
    {

        public Id: string;

        public SteamAccountId: string;

        public Mail: string;

        public Pass: string;

        public MailServer: string;

        public MailPort: number;
    }

export interface IMailConfig
    {

         Id: string;

         SteamAccountId: string;

         Mail: string;

         Pass: string;

         MailServer: string;

         MailPort: number;
    }