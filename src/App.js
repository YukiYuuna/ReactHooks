import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
     {
        title: 'What is react',
        content: 'React is front end java javascript framework'
     },
     {
        title: 'Why use React',
        content: 'React is a favourite JS library among engineers'
     },
     {
        title: 'How do you use React ?',
        content: 'You use react by creating components'
     }
];
export default () => {
    return <div>
        <Search />
     </div>
}