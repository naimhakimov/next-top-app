import {Button, Htag, P, Tag} from "@/components";
import { useState } from "react";

function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div>
            <Htag tag="h1">{counter}</Htag>
            <Htag tag="h2">Текст</Htag>
            <Htag tag="h3">Текст</Htag>
            <Button arrow='right' appearance='primary' onClick={() => setCounter(x => x+ 1)}>Button</Button>
            <Button arrow='down' appearance='ghost'>Button</Button>
            <P size='lg'>Болшой</P>
            <P size='md'>Средный</P>
            <P size='sm'>Маленькый</P>
            <Tag>Photoshop</Tag>
            <Tag color='red' size='md'>Дизайн</Tag>
            <Tag color='primary' href='lwerwerwerwe'>Дизайн</Tag>
        </div>
    );
}

export default App;
