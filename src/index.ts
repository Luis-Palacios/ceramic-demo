import './styles/style.scss';

console.log('hello, world');

import CeramicClient from '@ceramicnetwork/http-client'
import { ThreeIdConnect, EthereumAuthProvider } from '3id-connect'

// const CERAMIC_URL = 'https://dev-ceramic-node.paidnetwork.com'; // TODO: set as env variable
const CERAMIC_URL = 'https://localhost:7007';
// const CERAMIC_URL = 'https://ceramic-clay.3boxlabs.com'

const threeIdConnect = new ThreeIdConnect();

async function authenticate() {
    console.log('authenticating');
    // @ts-ignore
    const addresses = await window.ethereum.enable();
    
    // @ts-ignore
    const authProvider = new EthereumAuthProvider(window.ethereum, addresses[0])
    debugger;
    await threeIdConnect.connect(authProvider)
    debugger;
    const provider = await threeIdConnect.getDidProvider()
    debugger;
    const ceramic = new CeramicClient(CERAMIC_URL);
    // @ts-ignore
    await ceramic.setDIDProvider(provider)
    console.log(ceramic);
    debugger;
}

document.getElementById('btn-connect').addEventListener('click', authenticate)