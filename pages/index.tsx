import { JSX } from "react";
import { Button, Htag, P, Rating, Tag } from "@/components";
import { useState } from "react";
import { withLayout } from "@/layout/Layout";

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(3);
    return (
        <>
            <Htag tag="h2">Текст</Htag>
            <Htag tag="h3">Текст</Htag>
            <Button arrow='down' appearance='ghost'>Button</Button>
            <P size='lg'>Болшой</P>
            <P size='md'>Средный</P>
            <P size='sm'>Маленькый</P>
            <Tag>Photoshop</Tag>
            <Tag color='red' size='md'>Дизайн</Tag>
            <Tag color='primary'>Дизайн</Tag>
            <Rating rating={rating} setRating={setRating} isEditable={true}/>
        </>
    );
}

export default withLayout(Home);
