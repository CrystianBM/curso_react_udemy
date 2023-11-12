import "./App.css"

import products from "./data/products";

import { FirstComp } from './components/basics/FirstComp';
import { CompParameter } from './components/basics/CompParameter';
import { RandomNumber } from './components/basics/RandomNumber';
import { Card } from './components/layout/Card';
import FamilyMember from './components/basics/FamilyMember';
import { Family } from './components/basics/Family';
import {ProductList} from './components/repetition/ProductList';
import {EvenOrOdd} from "./components/conditional/EvenOrOdd";
import {UserInfo} from "./components/conditional/UserInfo";

export function App() {
    return (
        <div id="App">
            <div className="cards">
                <Card title="5 - Conditional" color="#A6CF98">
                    -- With username set --
                    <UserInfo user={{ name: 'Joseph' }}/>
                    <br></br>
                    -- No username set --
                    <UserInfo />
                    <br></br>
                    <EvenOrOdd number={Math.ceil(Math.random() * 20)}/>
                </Card>

                <Card title="4 - Repetition" color="#FFEE82">
                    <ProductList list={products}/>
                </Card>

                <Card title="4 - Child Component" color="#A9E6E6">
                    <Family surname="Smith">
                        <FamilyMember name="Peter" />
                        <FamilyMember name="Ana" />
                        <FamilyMember name="Joseph" />
                    </Family>
                </Card>

                <Card title="3 - Random Number Generator" color="#9C27B0">
                    <RandomNumber min="0" max="100"/>
                </Card>

                <Card title="2 - Components with Parameters" color="#00D66B">
                    <CompParameter 
                        title="Component with Parameters"
                        student="George"
                        grade="5.8" />
                </Card>

                <Card title="1 - Making the First Component">
                    <FirstComp />
                </Card>
            </div>
        </div>
    );
};