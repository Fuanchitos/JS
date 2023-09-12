import './style.css';
import Card from './components/Card';
import { apiData } from './helper/data';
import Header from './components/Header';

const empresa = {
  titulo: 'LECTURA 02',
};

document.body.appendChild(Header(empresa));
const main = document.createElement('main');
apiData.forEach((persona) => {
  main.appendChild(Card(persona));
});

document.body.appendChild(main);