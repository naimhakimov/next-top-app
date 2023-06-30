import {Button, Htag, P, Tag} from "@/components";

function App(): JSX.Element {
    return (
        <div>
            <Htag tag="h1">Текст</Htag>
            <Htag tag="h2">Текст</Htag>
            <Htag tag="h3">Текст</Htag>
            <Button arrow='right' appearance='primary' onClick={() => console.warn(123)}>Button</Button>
            <Button arrow='down' appearance='ghost'>Button</Button>
            <P size='lg'>Болшой</P>
            <P size='md'>Средный</P>
            <P size='sm'>Маленькый</P>
            <Tag>Photoshop</Tag>
            <Tag>Дизайн</Tag>
        </div>
    );
}

export default App;
