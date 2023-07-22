function add(a: number, b: number): number {
    return a + b;
  }
  
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  