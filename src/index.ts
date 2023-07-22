const welcome = (name: string) => `Welcome, to ${name}!`;

const element = <HTMLElement>document.getElementById('app');
element.innerHTML = welcome('RS');
