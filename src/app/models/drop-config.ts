export interface IDropConfig
{
    id: string;

    configName: string;

    gameId: number;

    game: string;

    dropDef: number;

    dropInterval: number;

    dropWidndow: number;

    dropPerWindow: number;
}

export class DropConfig implements IDropConfig
{
    public id: string;

    public configName: string;

    public gameId: number;

    public  game: string;

    public dropDef: number;

    public dropInterval: number;

    public dropWidndow: number;

    public dropPerWindow: number;
}