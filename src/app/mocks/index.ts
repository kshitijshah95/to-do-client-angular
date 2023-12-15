export class MockedTodoItem {
  public x: any;

  constructor(private value: any) {
    this.x = { ...value };
  }
}
