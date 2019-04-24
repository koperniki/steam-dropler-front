export interface INode
{
    Id: string;

    Name: string;

    Status: string;

    AccountIds: string[];
}

export class NodeDto implements INode
{
    public Id: string;

    public Name: string;

    public Status: string;

    public AccountIds: string[];
}