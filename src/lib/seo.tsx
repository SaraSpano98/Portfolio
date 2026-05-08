import { Helmet } from "react-helmet-async";
type Props = {
    title: string;
    description: string;
    image?: string;
    path?: string;
}

export default function SEO({ title, description, image, path }: Props) {
    const url = `https://example.com${path ?? ''}`;
    const imageUrl = image ? `https://example.com${image}` : 'https://example.com/default-image.jpg';
    const desc = description ?? 'Portfolio di Sara Spano, web app moderne, scalabili e performanti.'
    const fullTitle = `${title} • Sara Spano`
    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={url} />
        </Helmet>
    )
}
