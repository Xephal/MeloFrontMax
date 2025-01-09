export class Transaction {
  constructor(
    public id: string,
    public recipient: string,
    public amount: number,
    public reason: string,
    public createdAt: Date
  ) {}
}
