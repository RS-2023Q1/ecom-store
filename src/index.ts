import './index.scss';

const element: HTMLElement | null = document.getElementById('app');
if (element) {
  const logo: HTMLImageElement = new Image();
  const welcome = 'Welcome to RS School ';
  logo.src = './rs-logo.jpeg';
  element.append(logo, welcome);
}
