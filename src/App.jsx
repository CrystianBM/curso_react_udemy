import "./App.css"

import products from "./data/products";

import { FirstComp } from './components/basics/FirstComp';
import { CompParameter } from './components/basics/CompParameter';
import { RandomNumber } from './components/basics/RandomNumber';
import { Card } from './components/layout/Card';
import { Family } from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import ProductList from './components/repetition/ProductList';

export function App() {
    return (
        <div id="App">
            <div className="cards">
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